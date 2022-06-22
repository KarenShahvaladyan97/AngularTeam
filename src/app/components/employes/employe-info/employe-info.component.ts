import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { User } from 'src/app/models/user';
import { GlobalsService } from 'src/app/services/globals.service';
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
    private userService: UsersListService,
    private global: GlobalsService
    ) {
      
    
  }


  ngOnInit(): void {   

    this.route.params.subscribe((param: any) => {
       
          
  


      
      if(param.id) {
   
        this.global.getEmployes().subscribe(employe => 
          this.user = employe.find((item)=>item.id===Number(param.id)))     
        

      }
    })

    


  }


}
