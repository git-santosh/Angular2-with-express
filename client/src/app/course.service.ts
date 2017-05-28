
export class CourseService {
    getCourses(){ //explicitly write return type like getCourses() : string [] {}
        return [ { text:'course 1'} , { text :'course 2'} ,{text : 'course 3'}];
    
}