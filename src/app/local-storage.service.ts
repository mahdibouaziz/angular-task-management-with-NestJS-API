import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  set(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  get(key: string): string {
    return localStorage.getItem(key) || null;
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }
}
