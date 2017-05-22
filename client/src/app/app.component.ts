import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `
  <div class="col-sm-4">
    <h1>Hello {{name}}</h1>
    <courses></courses> 
    <authors></authors>
  </div>
  
  <div class="col-sm-6" style="margin-top:11%;">
    <img [src]="imgLink" class="thumbnail">
  </div>
  `
})
export class AppComponent  { 
  name = 'Angular'; 
public imgLink ="http://lorempixel.com/600/300";
}
