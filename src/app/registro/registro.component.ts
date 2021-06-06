import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  myForm:FormGroup;

  constructor(public fb:FormBuilder) { 
    this.myForm = this.fb.group({
      nombre:[ '', [Validators.required] ],
      apellido:[ '', [Validators.required]],
      telefono:[ '' ],
      email:[ '', [Validators.required, Validators.email] ],
      password:[ '', [Validators.required, Validators.minLength(6), Validators.maxLength(10)] ],
    })
  }

  ngOnInit(): void {}

  registro(){
    console.log(this.myForm.value)
  }
}
