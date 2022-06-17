import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../services/header.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private headerService: HeaderService
  ) { }

public user = {
  firstName: 'John',
  lastName: 'Doe',
  img: '../../../assets/free-profile-photo-whatsapp-4 2.png' 
}

public title: string;



  ngOnInit(): void {   
    this.headerService.headerTitle.subscribe((title:any)=>{
     this.title = title      
    })

  
  }

}
