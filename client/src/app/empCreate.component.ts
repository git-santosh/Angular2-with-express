import { Component , OnInit } from '@angular/core';

@Component({
    selector:'empCreate',
    templateUrl :'App/empCreate.component.html',
    styles:[`input.ng-invalid{border-left:5px solid red;} input.ng-valid{border-left:5px solid green;}`]
})
export class EmpCreateComponent implements OnInit{

    EmpCreateComponent(){
        
    }
    onSubmit(values :any){
        console.log(values);
    }
    
    ngOnInit(){

    }
}
