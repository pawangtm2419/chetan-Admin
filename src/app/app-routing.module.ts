import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginGuard } from './login/login.guard';
import { AppointmentComponent } from './appointment/appointment.component';
import { CategoryComponent } from './category/category.component';
import { TipsComponent } from './tips/tips.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MsglistComponent } from './msglist/msglist.component';
import { TipDetailComponent } from './tips/tip-detail/tip-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'appointment', component: AppointmentComponent, canActivate: [LoginGuard] },
  { path: 'msglist', component: MsglistComponent, canActivate: [LoginGuard] },
  { path: 'tips', component: TipsComponent, canActivate: [LoginGuard] },
  { path: 'tips/:id', component: TipDetailComponent, canActivate: [LoginGuard] },
  { path: 'category', component: CategoryComponent, canActivate: [LoginGuard] },
  { path: 'gallery', component: GalleryComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
