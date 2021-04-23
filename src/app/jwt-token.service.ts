import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

interface DecodedTokenDto {
  username: string;
  iat: number;
  exp: number;
}

@Injectable({
  providedIn: 'root',
})
export class JwtTokenService {
  jwtToken: string;
  decodedToken: DecodedTokenDto;

  constructor() {}

  // Set the token
  setToken(token: string): void {
    if (token) {
      this.jwtToken = token;
    }
  }

  // decode the token
  decodeToken(): void {
    if (this.jwtToken) {
      this.decodedToken = jwt_decode(this.jwtToken);
    }
  }

  // return the decoded token payload object
  getDecodeToken(): DecodedTokenDto {
    return jwt_decode(this.jwtToken);
  }

  // return the username of the token
  getUser(): string {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken.username : null;
  }

  // return an expiration time
  getExpiryTime(): number {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken.exp : null;
  }

  // check if the token is expired
  isTokenExpired(): boolean {
    const expiryTime: number = this.getExpiryTime();
    if (expiryTime) {
      return 1000 * expiryTime - new Date().getTime() < 5000;
    } else {
      return false;
    }
  }
}
