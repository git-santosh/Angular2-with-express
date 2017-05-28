import { Component ,OnInit } from "@angular/core";
import { AuthorService } from "./author.service";
@Component({
    selector:'authors',
    template : `
    
        <div class="row">
            <div class="col-md-6">
                 <h2>Authors </h2>
                 <form (submit) = "addAuthors()">
                    <div class="form-group">
                        <input type ="text" class="form-control" [(ngModel)]="addAuthor" name="addAuthor" placeholder="Add Author hear">
                    </div>        
                 </form>   
                 <ul class="list-group">
                    <li class="list-group-item" *ngFor="let author of authors"> {{author.text}} <button (click)="deleteAuthor(author.text)" class="rightAlign">X</button></li>
                 </ul>
            </div>    
        </div> 
    `,
    styles:[`h2{ color:orange;}`, `.rightAlign{ float:right}`],
    providers :[AuthorService]
})
export class AuthorsComponent implements OnInit{
    authors;
    addAuthor;
    constructor(public authorService : AuthorService){
        //this.authors = authorService.getAuthors();
    }
    ngOnInit () {
        this.authors = this.authorService.getAuthors();
        
    }
    addAuthors(){
        this.authors.push(
            {
                text : this.addAuthor
            }
            );
    }
    deleteAuthor(deleteText){
        for(var i=0; i< this.authors.length; i++){
            if(this.authors[i].text == deleteText){
                this.authors.splice(i,1);
            }
        }
    }
}