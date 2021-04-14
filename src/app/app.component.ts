import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  panelOpenState = false;
  isMobile = false;
  constructor(public router: Router, public service: AppService) { }
  ngOnInit() {
    this.isMobile = this.getIsMobile();
    window.onresize = () => {
      this.isMobile = this.getIsMobile();
    };
  }

  getLoginVerify() {
    if (this.service.isLoggedIn) {
      return true;
    } else {
      return false;
    }
  }

  getIsMobile(): boolean {
    if (document.documentElement.clientWidth < 860) {
      return false;
    } else {
      return true;
    }
  }
}

