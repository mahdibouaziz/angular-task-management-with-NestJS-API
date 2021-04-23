import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AuthorizeGuard } from './authorize.guard';
import { LoginSignupGuard } from './login-signup.guard';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { TaskManagementComponent } from './task-management/task-management/task-management.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [LoginSignupGuard] },
  {
    path: 'signup',
    component: SigninComponent,
    canActivate: [LoginSignupGuard],
  },
  {
    path: 'task-management',
    component: TaskManagementComponent,
    canActivate: [AuthorizeGuard],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
