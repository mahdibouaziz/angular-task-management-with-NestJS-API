import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { AppRoutingModule } from './app-routing.module';
import { TaskManagementComponent } from './task-management/task-management/task-management.component';
import { CreateTaskComponent } from './task-management/create-task/create-task.component';
import { SearchTaskComponent } from './task-management/search-task/search-task.component';
import { TaskComponent } from './task-management/task/task.component';
import { TasksContainerComponent } from './task-management/tasks-container/tasks-container.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent,
    TaskManagementComponent,
    CreateTaskComponent,
    SearchTaskComponent,
    TaskComponent,
    TasksContainerComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
