import {Component} from '@angular/core';

@Component({
    moduleId:module.id.replace("/dist/", "/app/"),
    templateUrl:'pipes.component.html',
   
   
})

export class PipesComponent{
    birthday:Date=new Date(1991,3,28);
    toggle:boolean=true;
    get format(){
        return this.toggle? 'shortDate':'fullDate';
    }
    toggleFormat(){
        this.toggle=!this.toggle;
    }
}