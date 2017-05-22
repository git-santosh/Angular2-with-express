import { Component } from '@angular/core';
import { AuthorsComponent } from "./authors.component";

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
    <courses></courses> 
    <authors></authors>`
})
export class AppComponent  { name = 'Angular'; }
