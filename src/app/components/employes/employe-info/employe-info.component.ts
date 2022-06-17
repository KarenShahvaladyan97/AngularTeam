import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { User } from 'src/app/models/user';
import { UsersListService } from 'src/app/services/users-list.service';

@Component({
  selector: 'app-employe-info',
  templateUrl: './employe-info.component.html',
  styleUrls: ['./employe-info.component.scss']
})
export class EmployeInfoComponent implements OnInit {
    public usersList: User[];
    public user: User | undefined

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private userService: UsersListService
    ) {
    this.route.params.subscribe((param: any) => {
      this.usersList = this.userService.usersList;
      if(param.id) {
   
       this.user = this.usersList.find((item)=>item.id===Number(param.id))     
        

      }
    })
  }
  ngOnInit(): void {
  }

}
