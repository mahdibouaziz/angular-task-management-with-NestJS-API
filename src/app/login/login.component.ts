import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { JwtTokenService } from '../jwt-token.service';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  invalidCredentials = false;
  constructor(
    private authService: AuthService,
    private jwtTokenService: JwtTokenService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  verifCredentials(): void {
    // console.log(this.username, this.password);
    const credentials = {
      username: this.username,
      password: this.password,
    };
    this.authService.login(credentials).subscribe(
      (response) => {
        this.invalidCredentials = false;
        // console.log('response:', response.accessToken);
        const accessToken = response.accessToken;
        this.jwtTokenService.setToken(accessToken); // set the token
        this.localStorageService.set('accessToken', accessToken); // add the token to the localstorage
        // redirect to our tasks
        this.router.navigate(['task-management']);
      },
      (error) => {
        console.log('error message:', error.error.message);
        this.invalidCredentials = true;
      }
    );
  }
}
