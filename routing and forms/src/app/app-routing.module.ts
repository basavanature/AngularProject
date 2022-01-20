import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './guard/auth.guard';
import { UnsavedGuard } from './guards/unsaved.guard';
import { InfoComponent } from './info/info.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',redirectTo:"Contact",pathMatch:"full"},
  {path:'Contact',component:ContactComponent,canActivate:[AuthGuard] },
  {path:'Info',component:InfoComponent,canActivate:[AuthGuard]},
  {path:'Login',component:LoginComponent,canDeactivate:[UnsavedGuard]},
  {path:'**',component:InfoComponent,canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
