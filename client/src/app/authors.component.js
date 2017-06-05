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
var author_service_1 = require("./author.service");
var AuthorsComponent = (function () {
    function AuthorsComponent(authorService) {
        this.authorService = authorService;
        //this.authors = authorService.getAuthors();
    }
    AuthorsComponent.prototype.ngOnInit = function () {
        this.authors = this.authorService.getAuthors();
    };
    AuthorsComponent.prototype.addAuthors = function () {
        this.authors.push({
            text: this.addAuthor
        });
    };
    AuthorsComponent.prototype.deleteAuthor = function (deleteText) {
        for (var i = 0; i < this.authors.length; i++) {
            if (this.authors[i].text == deleteText) {
                this.authors.splice(i, 1);
            }
        }
    };
    return AuthorsComponent;
}());
AuthorsComponent = __decorate([
    core_1.Component({
        selector: 'authors',
        template: "\n\n        <div class=\"row\">\n            <div class=\"col-sm-5\">\n                 <h2>Authors </h2>\n                 <form (submit) = \"addAuthors()\">\n                    <div class=\"form-group\">\n                        <input type =\"text\" class=\"form-control\" #pText  [(ngModel)]=\"addAuthor\" name=\"addAuthor\" placeholder=\"Add Author hear\">\n                    </div>        \n                 </form>   \n                 <ul class=\"list-group\">\n                    <li class=\"list-group-item\" *ngFor=\"let author of authors\"> {{author.text}} <button (click)=\"deleteAuthor(author.text)\" class=\"rightAlign\">X</button></li>\n                 </ul>\n                 <span> <b><q>{{courseData}}</q></b> is getting added in Parent Component</span>\n            </div>   \n            \n        </div> \n    ",
        styles: ["h2{ color:orange;}", ".rightAlign{ float:right}", ".col-sm-5{background-color:#FF485E;}"],
        providers: [author_service_1.AuthorService],
        inputs: ["courseData"]
    }),
    __metadata("design:paramtypes", [author_service_1.AuthorService])
], AuthorsComponent);
exports.AuthorsComponent = AuthorsComponent;
//# sourceMappingURL=authors.component.js.map