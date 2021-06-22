import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../core/services/firebase/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  myForm:FormGroup;

  constructor(
    public fb:FormBuilder,
    public auth:AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { 
    this.myForm = this.fb.group({
      email:[ '', [Validators.required, Validators.email] ],
      password:[ '', [Validators.required, Validators.minLength(6), Validators.maxLength(10)] ],
    })
  }

  ngOnInit(): void {}

  async login() {
    try {
      await this.auth.login(this.myForm.value)
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
