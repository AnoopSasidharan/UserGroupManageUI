import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private router: Router) {
    this.loginForm = new FormGroup({
      UserName: new FormControl(``),
      Password: new FormControl(``)
    })
   }

  ngOnInit(): void {
  }
  loginUser(): void {
    let name = this.loginForm.get(`UserName`)?.value;
    let password = this.loginForm.get(`Password`)?.value;

    this.router.navigate([`/home`]);
  }
}
