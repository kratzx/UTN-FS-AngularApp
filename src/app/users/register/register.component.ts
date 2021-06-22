import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/core/services/firebase/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [AuthService]
})
export class RegisterComponent implements OnInit {

  myForm:FormGroup;

  constructor(
    public fb:FormBuilder,
    public auth: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
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

  async register(){
    //this.auth.createUser(this.myForm.value);
    try {
      await this.auth.createUser(this.myForm.value)
      this.snackBar.open('Success!', undefined, {
        duration: 5000
      });
      this.router.navigate(['/']);
    }
    catch (e) {
      this.snackBar.open(e.message, undefined, {
        duration: 5000
      });
    }
  }
}
