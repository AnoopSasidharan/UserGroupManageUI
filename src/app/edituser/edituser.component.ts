import { Component, OnInit , Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent implements OnInit {
  @Input() editingUser?: User;
  userForm: FormGroup;
  constructor(private userService: UserService,
              private activateroute: ActivatedRoute) {
    this.userForm = new FormGroup({
      UserName: new FormControl(``)
    })
  }

  ngOnInit(): void {
    this.activateroute.params.subscribe(
      data =>{
        console.log(data.id);
        this.userService.getUser(+data.id).subscribe(
          userdata => {
            console.log(userdata);
          },
          err => {
            console.error(err);
          }
        )
      },
      err => {
        console.error(err);
      }
    )
  }
  registerUser(): void {
    let user = new User();
    user.name = this.userForm.get(`UserName`)?.value;
    this.userService.createUser(user).subscribe(
      data => {
        console.log(data);
      },
      err=> {
        console.log(err);
      }
    )
  }
}
