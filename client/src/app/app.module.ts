import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import * as $ from 'jquery';
import { AppComponent }  from './app.component';
import { CoursesComponent } from './courses.component';
import { AuthorsComponent } from './authors.component';
import { EmpCreateComponent } from './empCreate.component';
import { EmployeeListComponent } from './employeeList.component';
@NgModule({
  imports:      [ BrowserModule , FormsModule , RouterModule.forRoot([
    {path:'employees',component:EmployeeListComponent},
    {path:'create', component:EmpCreateComponent }
    ]) ],
  declarations: [ AppComponent , CoursesComponent , AuthorsComponent,EmployeeListComponent,EmpCreateComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
