import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/firebase/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AuthService]
})
export class NavbarComponent implements OnInit {

  constructor(
    public auth:AuthService
  ) {}

  ngOnInit(): void {}

  logout(){
    this.auth.logout();
  }
}
