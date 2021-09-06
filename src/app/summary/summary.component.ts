import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Group } from '../shared/models/group';
import { User } from '../shared/models/user';
import { GroupService } from '../shared/services/group.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  groups : Group[] =[];
  constructor(private groupService: GroupService,
              private router: Router) {
   }

  ngOnInit(): void {
    this.groupService.getAllGroups().subscribe(
      data => {
        //console.table(data);
        this.groups = data;
      },
      err => {
        console.error(err);
      }
    )
  }
  editUser(user: User): void{
    console.log(user);
    this.router.navigate([`/edituser`, user.id], {state: { data: user}});
  }

}
