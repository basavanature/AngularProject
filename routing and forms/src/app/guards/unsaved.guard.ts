import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})

export class UnsavedGuard implements CanDeactivate<LoginComponent> {
  constructor() {}

  canDeactivate(component: LoginComponent){
    if (component.uemail?.dirty) {
      return window.confirm('are you sure you want to navigate')
    } else {
      return false;
    }
  }
}