import {Component} from '@angular/core';

@Component({
    selector:'attirbute-directive',
    moduleId: module.id.replace("/dist/", "/app/"),
    templateUrl:'attribute-directive.component.html',
    styles:[`
      .row{
          margin:0px!important;
          padding-top:30px;
        }
    `]
})

export class AttributeDirectiveComponent{
    
}