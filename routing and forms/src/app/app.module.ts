import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InfoComponent } from './info/info.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './guard/auth.guard';
import { UnsavedGuard } from './guards/unsaved.guard';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InfoComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AuthGuard ,UnsavedGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
