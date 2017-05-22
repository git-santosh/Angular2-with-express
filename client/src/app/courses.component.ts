import { Component } from "@angular/core";
import { CourseService } from "./course.service";
@Component({
    selector:'courses',
    template : `<div class="container">
        <div class="row">
       
            
            <div class="col-sm-2">
            {{title}}
                 <h2>Course </h2>
                 <ul class="list-group">
                    <li class="list-group-item" *ngFor="let course of courses"> {{course}} </li>
                 </ul>
            </div>    
        </div> 
    </div>`,
    styles:[`h2{ color:red;`],
    providers:[CourseService]
})
export class CoursesComponent {
    title = 'This is the page title';
    courses : string [];
    constructor(courseService:CourseService){
        this.courses = courseService.getCourses();
    }
}