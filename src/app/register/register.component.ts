import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;
  constructor(private userService: UserService,
              private router: Router) {
    this.userForm = new FormGroup({
      UserName: new FormControl(``)
    })
  }

  ngOnInit(): void {
  }
  registerUser(): void{
    let user = new User();
    user.name = this.userForm.get(`UserName`)?.value;
    this.userService.createUser(user).subscribe(
      data => {
        console.log(data);
        this.router.navigate([`/login`]);
      },
      err=> {
        console.log(err);
      }
    )
  }
}
