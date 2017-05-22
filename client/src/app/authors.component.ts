import { Component } from "@angular/core";
import { AuthorService } from "./author.service";
@Component({
    selector:'authors',
    template : `<h2>Authors </h2>
    <ul>
        <li *ngFor="let author of authors"> {{author}} </li>
    </ul>`,
    styles:[`h2{ color:orange;}`],
    providers :[AuthorService]
})
export class AuthorsComponent{
    authors  : string [];

    constructor(authorService : AuthorService){
        this.authors = authorService.getAuthors();
    }
}