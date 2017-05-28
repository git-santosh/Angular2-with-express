import { Component } from '@angular/core';
//declare var jQuery: any;
declare var $:JQueryStatic;
@Component({
  selector: 'my-app',
  template: `
  <div [class.col-md-4]="custom">
    <h1>Hello {{name}}</h1>
    <courses></courses> 
    <authors></authors>
  </div>
  
  <div class="col-sm-6" style="margin-top:12%;">
    <img [src]="imgLink" class="thumbnail" data-toggle="tooltip" data-placement="top" title="Random Image" (mouseover)="onHover($event)"><br>
  </div>
  `,
  styles:[`.col-sm-4{background-color:#F5EFEF; margin-top:5%;}`]
})
export class AppComponent  { 
  name = 'Angular'; 
public imgLink ="http://lorempixel.com/700/310";
public custom=true;

onHover(value){
  var hold = value.srcElement.attributes[3];
  
 // console.log('['+hold+']');
 // var hold = '['+value.srcElement.attributes[3].toString()+'='+'"'+$(value.srcElement.attributes[3])[0].nodeValue+'"'+']';
  console.log(hold);

  //(<any>$('['+value.srcElement.attributes[3]+']')).tooltip();
}
}
