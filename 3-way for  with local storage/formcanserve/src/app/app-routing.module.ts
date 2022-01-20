import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegidtrationComponent } from './regidtration/regidtration.component';
import { UserboardComponent } from './userboard/userboard.component';

const routes: Routes = [
  {path:'',redirectTo:"reg",pathMatch:"full"},
  {path:'login',component:LoginComponent},
  {path:'reg',component:RegidtrationComponent},
  {path:'userboard',component:UserboardComponent},
  {path:'**',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
