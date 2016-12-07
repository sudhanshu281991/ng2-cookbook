import {Component,OnInit} from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
     moduleId:module.id.replace("/dist/", "/app/"),
     selector:'forms-reactive-control',
     templateUrl:'reactive.forms.component.html',
     styles:[
         `
          .auto-margin{
              margin:0px!important;
              paddding:20px 0 20px 0;
          }
          .no-paddding{
              padding:0px!important;
          }
          .btn-success{
              margin:10px;
          }
          .sub-heading{
              padding:10px;
          }
         `
     ]

})

export class ReactiveFormsComponent implements OnInit{
    registerForm:FormGroup;
    constructor(private formBuilder:FormBuilder){}
    ngOnInit(){
        this.registerForm=this.formBuilder.group({
            firstName:['',Validators.required],
            lastName:['',Validators.required],
            emailId:['',Validators.required],
            mblNo:['',Validators.compose([Validators.required,Validators.minLength(9),Validators.maxLength(10)])],
            addressDetails:this.formBuilder.group({
                address:['',Validators.required],
                state:['',Validators.required]
            })
        })
    }

    submitForm(value:any):void{
        console.log(value)
    }

  
}