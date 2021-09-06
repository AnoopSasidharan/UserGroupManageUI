import { Component, OnInit } from '@angular/core';
import { User } from './shared/models/user';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  users: User[]=[];
  constructor(private userService: UserService){

  }
  ngOnInit(): void{
    this.userService.getAllUsers().subscribe(
      data => {
        this.users = data;
      },
      err=>{
        console.log(`an error occured - ${err}`);
      }
    )
  }
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
