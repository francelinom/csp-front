import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userName!: string;
  password!: string;
  loginErro!: boolean;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(`user: ${this.userName}, pass: ${this.password}`);
  }
}
