import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { DataModel } from '../data.model';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: DataModel = new DataModel();
  adminForm: FormGroup;
  constructor(private login: AppService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.verifyServer();
    this.adminForm = this.formBuilder.group({
      username: [this.user.username, [Validators.required]],
      password: [this.user.password, [Validators.required, Validators.minLength(8)]],
    });
  }
  getUserData(event: { preventDefault: () => void; }) {
    event.preventDefault();
    const username = this.user.username;
    const password = this.user.password;
    this.login.getUserData(username, password).subscribe(data => {
      if (data.success) {
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('UserName', username);
        this.login.setLoggedIn(true);
        this.router.navigate(['appointment']);
      } else {
        window.alert(data.serect);
      }
    });
  }

  verifyServer() {
    if (this.login.isLoggedIn) {
      this.login.getServaer().subscribe(data => {
        if (data.success) {
          this.router.navigate(['appointment']);
        } else {
          window.alert('You are logged out. Login Again!!!');
          this.router.navigate(['login']);
          localStorage.clear();
        }
      });
    } else {
      this.router.navigate(['login']);
      localStorage.clear();
    }
  }
}
