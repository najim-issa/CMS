import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'doctor', component: DoctorComponent},
  {path: 'contactus', component: ContactusComponent},
  {path: 'userlogin', component: AboutusComponent},
  {path: 'signup', component: AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
