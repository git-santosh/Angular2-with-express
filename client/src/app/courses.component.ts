import { Component , OnInit } from "@angular/core";
import { CourseService } from "./course.service";
@Component({
    selector:'courses',
    template : `
        <div class="row">
            <div class="col-sm-5">
                 <h2>Course </h2>
                 <form (submit) = "addCourses()">
                    <div class="form-group" >
                        <input type="text" class="form-control" #pText (keyup)="0"  [(ngModel)] = "addCourse" name="addCourse" placeholder="Add Course hear">
                    </div>
                 </form>
                 <ul class="list-group">
                    <li class="list-group-item" *ngFor="let course of courses"> {{course.text}} <button (click)="deleteCourese(course.text)" class="rightAlign">X</button></li> 
                 </ul>
            </div>   
            <authors [courseData]="pText.value"></authors>  
        </div> 
    `,
    styles:[`h2{ color:red; `,`.rightAlign{ float:right}`,`.col-sm-5{background-color:#FEE555;}`],
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
    deleteCourese(deletetext){
        for(var i=0; i<this.courses.length; i++){
            if(this.courses[i].text == deletetext){
                this.courses.splice(i,1);
            }
        }
    }
}