import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { DataModel } from '../data.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  category = [];
  imagelist = [];
  timestamp = new Date();
  tips: DataModel = new DataModel();
  galleryForm: FormGroup;
  error: '';
  upload = '';
  images;
  imagename = 'Choose file...';
  panelOpenState = false;
  username = localStorage.getItem('UserName');
  displayedColumns: string[] = ['id', 'title', 'filename', 'category', 'timestamp', 'delete'];
  constructor(private service: AppService, private router: Router, private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.service.getImageData().subscribe((res: []) => {
      this.imagelist = res;
    },
      (err) => {
        this.error = err;
      }
    );
    this.galleryForm = this.formBuilder.group({
      title: [this.tips.title, [Validators.required, Validators.minLength(3), Validators.maxLength(149)]],
      categoryname: [this.tips.categoryname, [Validators.required]],
      image: [this.tips.image, [Validators.required]]
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
              this.upload = 'false';
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
  setImageData(event: { preventDefault: () => void; }) {
    event.preventDefault();
    const title = this.tips.title;
    const filename = this.imagename;
    const categoryname = this.tips.categoryname;
    const timeStamp: string = this.timestamp.toLocaleString();
    this.service.setImageData(this.username, title, filename, categoryname, timeStamp).subscribe(data => {
      if (data.login) {
        if (data.success) {
          window.alert(data.serect);
          this.tips = new DataModel();
          this.imagename = 'Choose file...';
          this.upload = 'false';
          this.ngOnInit();
        } else {
          window.alert(data.serect);
        }
      } else {
        window.alert(data.serect);
        this.service.getLogOut();
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

  deleteimage(id) {
    this.service.imgDeleted(this.username, id).subscribe(data => {
      if (data.login) {
        if (data.success) {
          window.alert(data.serect);
          this.ngOnInit();
        } else {
          window.alert(data.serect);
        }
      } else {
        window.alert(data.serect);
        this.service.getLogOut();
      }
    });
  }
}
