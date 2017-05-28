import { Component , OnInit } from "@angular/core";
import { CourseService } from "./course.service";
@Component({
    selector:'courses',
    template : `
        <div class="row">
       
            
            <div class="col-md-6">
            {{title}}
                 <h2>Course </h2>
                 <form (submit) = "addCourses()">
                    <div class="form-group" >
                        <input type="text" class="form-control" [(ngModel)] = "addCourse" name="addCourse" placeholder="Add Course hear">
                    </div>
                 </form>
                 <ul class="list-group">
                    <li class="list-group-item" *ngFor="let course of courses"> {{course.text}} </li>
                 </ul>
            </div>    
        </div> 
    `,
    styles:[`h2{ color:red;`],
    providers:[CourseService]
})
export class CoursesComponent implements OnInit{
    title = 'This is the page title';
    courses ;
    addCourse;
    constructor(public courseService:CourseService){
        
    }
    ngOnInit(){
        this.courses =this.courseService.getCourses();
    }
    addCourses(){
        console.log(this.addCourse);
        this.courses.push({
            text:this.addCourse
        });
    }
}