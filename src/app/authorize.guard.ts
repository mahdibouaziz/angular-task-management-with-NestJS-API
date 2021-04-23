import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { JwtTokenService } from './jwt-token.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorizeGuard implements CanActivate {
  constructor(
    private jwtTokenService: JwtTokenService,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (
      this.jwtTokenService.getUser() &&
      !this.jwtTokenService.isTokenExpired()
    ) {
      return true;
    } else if (this.localStorageService.get('accessToken')) {
      const accessToken = this.localStorageService.get('accessToken');
      this.jwtTokenService.setToken(accessToken);
      if (
        this.jwtTokenService.getUser() &&
        !this.jwtTokenService.isTokenExpired()
      ) {
        return true;
      }
    }
    this.router.navigate(['/login']);
  }
}
