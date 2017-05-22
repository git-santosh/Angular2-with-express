import { Component } from "@angular/core";
import { AuthorService } from "./author.service";
@Component({
    selector:'authors',
    template : `
    
        <div class="row">
            <div class="col-md-6">
                 <h2>Authors </h2>
                 <ul class="list-group">
                    <li class="list-group-item" *ngFor="let author of authors"> {{author}} </li>
                 </ul>
            </div>    
        </div> 
    `,
    styles:[`h2{ color:orange;}`],
    providers :[AuthorService]
})
export class AuthorsComponent{
    authors  : string [];

    constructor(authorService : AuthorService){
        this.authors = authorService.getAuthors();
    }
}