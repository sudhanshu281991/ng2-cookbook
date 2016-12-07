import {Component, OnInit} from '@angular/core';
import {User} from '../models/user-interface';
import {Theme} from '../models/theme-interface';

@Component({
    moduleId: module.id.replace("/dist/", "/app/"),
    selector: 'forms-controls',
    templateUrl: 'forms-controls.component.html',
    styles: [
        `
          .btn-success{
              margin-top:10px;
          }
          .form-control{
              margin-bottom:20px;
          }
         `
    ]
})

export class FormsControlComponent {
    firstname: string = "Sudhanshu";
    onSubmit(form: any): void {
        console.log("the form value is:", form);
    }
}