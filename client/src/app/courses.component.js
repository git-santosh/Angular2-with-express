"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var course_service_1 = require("./course.service");
var CoursesComponent = (function () {
    function CoursesComponent(courseService) {
        this.courseService = courseService;
        this.title = 'This is the page title';
    }
    CoursesComponent.prototype.ngOnInit = function () {
        this.courses = this.courseService.getCourses();
    };
    CoursesComponent.prototype.addCourses = function () {
        console.log(this.addCourse);
        this.courses.push({
            text: this.addCourse
        });
    };
    CoursesComponent.prototype.deleteCourese = function (deletetext) {
        for (var i = 0; i < this.courses.length; i++) {
            if (this.courses[i].text == deletetext) {
                this.courses.splice(i, 1);
            }
        }
    };
    return CoursesComponent;
}());
CoursesComponent = __decorate([
    core_1.Component({
        selector: 'courses',
        template: "\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n            {{title}}\n                 <h2>Course </h2>\n                 <form (submit) = \"addCourses()\">\n                    <div class=\"form-group\" >\n                        <input type=\"text\" class=\"form-control\" [(ngModel)] = \"addCourse\" name=\"addCourse\" placeholder=\"Add Course hear\">\n                    </div>\n                 </form>\n                 <ul class=\"list-group\">\n                    <li class=\"list-group-item\" *ngFor=\"let course of courses\"> {{course.text}} <button (click)=\"deleteCourese(course.text)\" class=\"rightAlign\">X</button></li> \n                 </ul>\n            </div>    \n        </div> \n    ",
        styles: ["h2{ color:red;", ".rightAlign{ float:right}"],
        providers: [course_service_1.CourseService]
    }),
    __metadata("design:paramtypes", [course_service_1.CourseService])
], CoursesComponent);
exports.CoursesComponent = CoursesComponent;
//# sourceMappingURL=courses.component.js.map