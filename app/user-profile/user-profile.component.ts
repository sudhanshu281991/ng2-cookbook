import {Component,OnInit} from '@angular/core';
import {FormGroup, FormBuilder,Validators} from '@angular/forms';
import reactiveForm = require('./user-profile.constant');


@Component({
  templateUrl: './app/user-profile/user-profile.component.html',
  styles: [`label{margin-right:40px;} button{margin-top:40px;}`]

})

export class UserInformationComponent implements OnInit{

  //implementing the hardedcoded value into html

  TEXT_REACTIVE_FORM: string = reactiveForm.TEXT_REACTIVE_FORM;
  TEXT_FIRST_NAME: string = reactiveForm.TEXT_FIRST_NAME;
  TEXT_LAST_NAME: string = reactiveForm.TEXT_LAST_NAME;
  TEXT_STREET: string = reactiveForm.TEXT_STREET;
  TEXT_ZIP: string = reactiveForm.TEXT_ZIP;
  TEXT_CITY: string = reactiveForm.TEXT_CITY;
  BUTTON_SUBMIT: string = reactiveForm.BUTTON_SUBMIT;
  //end of the binding of the hardcoded value  

  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ['',Validators.required],
      lastname: ['',Validators.required],
      address: this.formBuilder.group({
        street: [],
        zip: [],
        city: []
      })
    });
  }

}