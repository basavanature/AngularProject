import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate  {
  constructor(private authservice: AuthService) {}
  canActivate() {
    if (this.authservice.isLoggedIn()) {
      return true;
    } else {
      alert('you need to login to visit this page');
       return false;
    }
  }
  

}
