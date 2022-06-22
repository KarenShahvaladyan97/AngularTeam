import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import {ActivatedRoute, Router} from "@angular/router";
import { UsersListService } from 'src/app/services/users-list.service';
import { GlobalsService } from 'src/app/services/globals.service';

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.scss']
})
export class EmployesComponent implements OnInit {
  public usersList:User [];

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private userService: UsersListService,
    private global: GlobalsService
    ) {     
            
  }

  ngOnInit(): void {
    this.global.getEmployes().subscribe(employe => 
      this.usersList = employe)

  }

  navigate(id: any) {
    this.router.navigate(['/employees', id])
  }
}
