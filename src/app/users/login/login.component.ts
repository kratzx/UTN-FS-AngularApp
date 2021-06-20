import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/firebase/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  myForm:FormGroup;

  constructor(
    public fb:FormBuilder,
    public auth:AuthService
  ) { 
    this.myForm = this.fb.group({
      email:[ '', [Validators.required, Validators.email] ],
      password:[ '', [Validators.required, Validators.minLength(6), Validators.maxLength(10)] ],
    })
  }

  ngOnInit(): void {}

  login() {
    this.auth.login(this.myForm.value);
  }

}
