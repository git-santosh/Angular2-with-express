import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `
  <div [class.col-sm-4]="custom">
    <h1>Hello {{name}}</h1>
    <courses></courses> 
    <authors></authors>
  </div>
  
  <div class="col-sm-6" style="margin-top:12%;">
    <img [src]="imgLink" class="thumbnail">
  </div>
  `,
  styles:[`.col-sm-4{background-color:#F5EFEF; margin-top:5%;}`]
})
export class AppComponent  { 
  name = 'Angular'; 
public imgLink ="http://lorempixel.com/700/310";
public custom=true;
}
