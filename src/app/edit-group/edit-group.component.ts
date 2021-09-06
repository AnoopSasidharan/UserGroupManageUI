import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Group } from '../shared/models/group';
import { GroupService } from '../shared/services/group.service';

@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.scss']
})
export class EditGroupComponent implements OnInit {

  groupForm: FormGroup;
  constructor(private groupService: GroupService) {
    this.groupForm = new FormGroup({
      Name: new FormControl(``),
      Description: new FormControl(``)
    })
  }

  ngOnInit(): void {
  }
  registerGroup(): void{
    let group = new Group();
    group.name = this.groupForm.get(`Name`)?.value;
    group.description = this.groupForm.get(`Description`)?.value;
    console.log(group);
    this.groupService.createGroup(group).subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
    )
  }
}
