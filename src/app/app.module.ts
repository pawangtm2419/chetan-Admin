import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CategoryComponent } from './category/category.component';
import { TipsComponent } from './tips/tips.component';
import { LoginGuard } from './login/login.guard';
import { GalleryComponent } from './gallery/gallery.component';
import { MsglistComponent } from './msglist/msglist.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { TipDetailComponent } from './tips/tip-detail/tip-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TipsComponent,
    FooterComponent,
    CategoryComponent,
    MsglistComponent,
    PageNotFoundComponent,
    LoginComponent,
    GalleryComponent,
    AppointmentComponent,
    TipDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
