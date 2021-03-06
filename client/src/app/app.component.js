"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular';
        this.imgLink = "http://lorempixel.com/700/310";
        this.custom = true;
    }
    AppComponent.prototype.onHover = function (value) {
        var hold = value.srcElement.attributes[3];
        // console.log('['+hold+']');
        // var hold = '['+value.srcElement.attributes[3].toString()+'='+'"'+$(value.srcElement.attributes[3])[0].nodeValue+'"'+']';
        console.log(hold);
        //(<any>$('['+value.srcElement.attributes[3]+']')).tooltip();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n <router-outlet></router-outlet>\n  <div [class.col-sm-4]=\"custom\">\n    <h1>Hello {{name}}</h1>\n    <courses></courses> \n  </div>\n    \n  <div class=\"col-sm-6\" style=\"margin-top:12%;\">\n      <tooltip-content  #ImageName [animation]=\"true\" placement=\"right\">\n       <span style=\"color: #C21F80\">This is a sample Image</span>\n    </tooltip-content>\n    <img [src]=\"imgLink\" class=\"thumbnail\" [tooltip]=\"ImageName\"><br>\n\n  </div>\n  \n  ",
        styles: [".col-sm-4{background-color:#F5EFEF; margin-top:5%;}"]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map