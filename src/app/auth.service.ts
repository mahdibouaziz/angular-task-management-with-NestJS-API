import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  link = 'http://localhost:3000/auth/';

  constructor(private http: HttpClient) {}

  login(credentials): Observable<any> {
    return this.http.post(this.link + 'signin', credentials);
  }
}
