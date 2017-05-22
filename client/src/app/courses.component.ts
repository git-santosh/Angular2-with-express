import { Component } from "@angular/core";
import { CourseService } from "./course.service";
@Component({
    selector:'courses',
    template : `<h2>Courses</h2>
    {{title}}
    <ul>
        <li *ngFor="let course of courses">
            {{course}}
        </li>
    </ul>`,
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