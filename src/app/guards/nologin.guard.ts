import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Auth } from 'aws-amplify';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class NologinGuard implements CanActivate {
  constructor(private router: Router,) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return Auth.currentUserInfo().then((user) => {
      if (isNullOrUndefined(user)) {
        return true;
      } else {
        this.router.navigate(['listmusic']);
        return false;
      }
    });
  }


}
