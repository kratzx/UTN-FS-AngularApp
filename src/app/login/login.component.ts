import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm:FormGroup;

  constructor(public fb:FormBuilder) { 
    this.myForm = this.fb.group({
      email:[ '', [Validators.required, Validators.email] ],
      password:[ '', [Validators.required, Validators.minLength(6), Validators.maxLength(10)] ],
    })
  }

  ngOnInit(): void {}

  login() {
    console.log(this.myForm.value)
  }

}
