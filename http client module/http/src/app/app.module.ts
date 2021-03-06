import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { PracicecomponentComponent } from './pracicecomponent/pracicecomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PracicecomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
