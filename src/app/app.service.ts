import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

interface DataServe {
  serverData: Array<object>;
}
interface LoginData {
  success: boolean;
  serect: string;
  login: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');
  username: any;
  category: [];
  imagelist: [];
  enquiryData: [];
  constructor(public http: HttpClient, public router: Router) { }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
  }
  get isLoggedIn() {
    if (JSON.parse(localStorage.getItem('loggedIn'))) {
      return true;
    } else {
      return false;
    }
  }
  getServaer() {
    const username = localStorage.getItem('UserName');
    return this.http.post<LoginData>('https://chetanclinic.com/admin/api/verifylogin.php', {
      username
    });
  }
  getLogOut(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  getUserData(username, password) {
    return this.http.post<LoginData>('https://chetanclinic.com/admin/api/login.php', {
      username,
      password
    });
  }

  getEnquiryData(): Observable<[]> {
    return this.http.get('https://chetanclinic.com/admin/api/enquiry.php').pipe(map(res => {
      this.enquiryData = res['serverData'];
      return this.enquiryData;
    }),
    );
  }
  enquiryDelete(username, id) {
    return this.http.post<LoginData>('https://chetanclinic.com/admin/api/enquirydelete.php', {
      username, id
    });
  }

  getAppointmentData() {
    return this.http.get<DataServe>('https://chetanclinic.com/admin/api/appointment.php');
  }
  appointDelete(username, id) {
    return this.http.post<LoginData>('https://chetanclinic.com/admin/api/appointmentdelete.php', {
      username, id
    });
  }

  getTipsData() {
    return this.http.get<DataServe>('https://chetanclinic.com/admin/api/tips.php');
  }
  tipsDelete(id) {
    return this.http.post<LoginData>('https://chetanclinic.com/admin/api/tipsdelete.php', {
      id
    });
  }

  getCategoryData() {
    return this.http.get<DataServe>('https://chetanclinic.com/admin/api/category.php');
  }

  getCategory(username, categoryName, timeStamp) {
    return this.http.post<LoginData>('https://chetanclinic.com/admin/api/addcategory.php', {
      username, categoryName, timeStamp
    });
  }

  categoryediting(categoryid) {
    console.log(categoryid);
  }

  categorydeleted(username, categoryid) {
    return this.http.post<LoginData>('https://chetanclinic.com/admin/api/categorydelete.php', {
      username, categoryid
    });
  }

  setTips(title, categoryname, image, description, bloglink, timeStamp) {
    return this.http.post<LoginData>('https://chetanclinic.com/admin/api/addtips.php', {
      title, categoryname, image, description, bloglink, timeStamp
    });
  }

  getCategoryTip(): Observable<[]> {
    return this.http.get('https://chetanclinic.com/admin/api/category.php').pipe(map(res => {
      this.category = res['category'];
      return this.category;
    }),
    );
  }

  setImageData(username, title, filename, categoryname, timeStamp) {
    return this.http.post<LoginData>('https://chetanclinic.com/admin/api/imagedata.php', {
      username, title, filename, categoryname, timeStamp
    });
  }
  getImageData(): Observable<[]> {
    return this.http.get('https://chetanclinic.com/admin/api/imagedatalist.php').pipe(map(res => {
      this.imagelist = res['imagelist'];
      return this.imagelist;
    }),
    );
  }
  imgDeleted(username, id) {
    return this.http.post<LoginData>('https://chetanclinic.com/admin/api/imagedelete.php', {
      username, id
    });
  }
}
