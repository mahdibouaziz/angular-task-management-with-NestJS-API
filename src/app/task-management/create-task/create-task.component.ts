import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtTokenService } from 'src/app/jwt-token.service';
import { LocalStorageService } from 'src/app/local-storage.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
})
export class CreateTaskComponent implements OnInit {
  constructor(
    private jwtTokenService: JwtTokenService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  logout(): void {
    this.localStorageService.remove('accessToken');
    this.jwtTokenService.removeToken();
    this.router.navigate(['/login']);
  }
}
