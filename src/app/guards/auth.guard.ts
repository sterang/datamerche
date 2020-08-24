import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Auth } from 'aws-amplify';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return Auth.currentUserInfo().then((user) => {
      if (isNullOrUndefined(user)) {
        this.router.navigate(['home']);
        return false;
      } else {
        return true;
      }
    });

  }

}
//const user = await Auth.currentUserInfo();