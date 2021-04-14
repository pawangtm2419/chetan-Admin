import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { DataModel } from '../data.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryData = [];
  error = '';
  displayedColumns: string[] = ['id', 'category', 'edit', 'delete'];
  category: DataModel = new DataModel();
  timestamp = new Date();
  categoryForm: FormGroup;
  panelOpenState = false;
  username = localStorage.getItem('UserName');
  constructor(private service: AppService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.categoryForm = this.formBuilder.group({
      categoryname: [this.category.categoryname, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
    });
    this.service.getCategoryTip().subscribe((res: []) => {
      this.categoryData = res;
    },
      (err) => {
        this.error = err;
      }
    );
  }
  getCategoryData(event: { preventDefault: () => void; }) {
    event.preventDefault();
    const categoryname = this.category.categoryname;
    const timeStamp: string = this.timestamp.toLocaleString();
    this.service.getCategory(this.username, categoryname, timeStamp).subscribe(data => {
      if (data.login) {
        if (data.success) {
          window.alert(data.serect);
          this.category = new DataModel();
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
  catrgoryedit(categoryid: any) {
    this.service.categoryediting(categoryid);
  }
  categorydelete(categoryid) {
    this.service.categorydeleted(this.username, categoryid).subscribe(data => {
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
