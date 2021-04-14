import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-msglist',
  templateUrl: './msglist.component.html',
  styleUrls: ['./msglist.component.css']
})
export class MsglistComponent implements OnInit {
  enquiryData = [];
  displayedColumns: string[] = ['id', 'name', 'email', 'number', 'disease', 'timestamp', 'action'];
  error: '';
  username = localStorage.getItem('UserName');
  constructor(private service: AppService, private router: Router) { }

  ngOnInit() {
    this.service.getEnquiryData().subscribe((res: []) => {
      this.enquiryData = res;
    },
      (err) => {
        this.error = err;
      }
    );
  }

  enqDelete(id) {
    this.service.enquiryDelete(this.username, id).subscribe(data => {
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
