import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  enquiryData = [];
  displayedColumns: string[] = ['id', 'name', 'email', 'mobile', 'date', 'msg', 'problem', 'timestamp', 'action'];
  username = localStorage.getItem('UserName');
  constructor(private service: AppService, private router: Router) { }

  ngOnInit() {
    this.service.getAppointmentData().subscribe(data => {
      this.enquiryData = data.serverData;
     });
  }

  appointmentDelete(id) {
    this.service.appointDelete(this.username, id).subscribe(data => {
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
