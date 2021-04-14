import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { DataModel } from '../data.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent implements OnInit {
  enquiryData = [];
  displayedColumns: string[] = ['id', 'title', 'image', 'description', 'categoryid', 'bloglink', 'view', 'action'];
  category = [];
  timestamp = new Date();
  tips: DataModel = new DataModel();
  tipsForm: FormGroup;
  panelOpenState = false;
  error: '';
  upload = '';
  images;
  imagename = 'Choose file...';
  constructor(private service: AppService, private router: Router, private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.verifyServer();
    this.getTipsData();
    this.tipsForm = this.formBuilder.group({
      title: [this.tips.title, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      categoryname: [this.tips.categoryname, [Validators.required]],
      image: [this.tips.image, [Validators.required]],
      description: [this.tips.description, [Validators.required, Validators.minLength(50), Validators.maxLength(549)]],
      bloglink: [this.tips.bloglink, [Validators.required, Validators.minLength(5), Validators.maxLength(150)]]
    });
  }
  selectFile(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const filename = file.name;
      this.images = file;
      this.imagename = filename;
      const filesize = file.size / 1024;
      if (filesize >= 25) {
        if (filesize <= 1024) {
          const formData = new FormData();
          formData.append('file', this.images);
          this.http.post<any>('https://chetanclinic.com/admin/api/fileupload.php', formData).subscribe(data => {
            if (data.success) {
              this.imagename = filename;
              this.upload = 'true';
            } else {
              window.alert(data.serect);
              this.upload = '';
            }
          });
        } else {
          alert('Image big!!');
        }
      } else {
        alert('Image small!!');
      }
    } else {
      alert('Image not found!!');
    }
  }
  setTipsData(event: { preventDefault: () => void; }) {
    event.preventDefault();
    const title = this.tips.title;
    const categoryname = this.tips.categoryname;
    const image = this.imagename;
    const description = this.tips.description;
    const bloglink = this.tips.bloglink;
    const timeStamp: string = this.timestamp.toLocaleString();
    this.service.setTips(title, categoryname, image, description, bloglink, timeStamp).subscribe(data => {
      if (data.success) {
        window.alert(data.serect);
        this.tips = new DataModel();
        this.imagename = 'Choose file...';
        this.ngOnInit();
      } else {
        window.alert(data.serect);
      }
    });
  }
  getTipsData() {
    this.service.getTipsData().subscribe(data => {
      this.enquiryData = data.serverData;
    });
  }
  tipdelete(id) {
    this.service.tipsDelete(id).subscribe(data => {
      if (data.success) {
        window.alert(data.serect);
        this.ngOnInit();
      } else {
        window.alert(data.serect);
      }
    });
  }

  verifyServer() {
    this.service.getServaer().subscribe(data => {
      if (data.success) {
      } else {
        window.alert('You are logged out. Login Again!!!');
        this.router.navigate(['login']);
        localStorage.clear();
      }
    });
  }

  getCategory(): void {
    this.service.getCategoryTip().subscribe((res: []) => {
      this.category = res;
    },
      (err) => {
        this.error = err;
      }
    );
  }
}
