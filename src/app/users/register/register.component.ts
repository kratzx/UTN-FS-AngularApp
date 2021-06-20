import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/firebase/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthService]
})
export class RegisterComponent implements OnInit {

  myForm:FormGroup;

  constructor(
    public fb:FormBuilder,
    public auth: AuthService
  ) { 
    this.myForm = this.fb.group({
      nombre:[ '', [Validators.required] ],
      apellido:[ '', [Validators.required]],
      telefono:[ '' ],
      email:[ '', [Validators.required, Validators.email] ],
      password:[ '', [Validators.required, Validators.minLength(6), Validators.maxLength(10)] ],
    })
  }

  ngOnInit(): void {}

  register(){
    this.auth.createUser(this.myForm.value);
  }
}
