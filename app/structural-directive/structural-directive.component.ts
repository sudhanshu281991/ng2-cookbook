import {Component} from '@angular/core';

@Component({
    selector:'structural-directive',
    moduleId:module.id.replace("/dist/", "/app/"),
    templateUrl:'structural-directive.component.html'
})

export class StructuralDirectiveComponent{
    users:any;
    constructor(){
         [
            this.users = [
                { name: 'Sudhanshu', state: 'in_active' },
                { name: 'Sud', state: 'in_active' },
                { name: 'Happy', state: 'in_active' },
                { name: 'Good', state: 'in_active' }
            ]
        ]
    }
}