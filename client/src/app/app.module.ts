import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import * as $ from 'jquery';
import { AppComponent }  from './app.component';
import { CoursesComponent } from "./courses.component";
import { AuthorsComponent } from "./authors.component";
@NgModule({
  imports:      [ BrowserModule , FormsModule ],
  declarations: [ AppComponent , CoursesComponent , AuthorsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
