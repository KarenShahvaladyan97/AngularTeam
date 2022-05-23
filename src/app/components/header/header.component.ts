import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

public user = {
  firstName: 'John',
  lastName: 'Doe',
  img: '../../../assets/free-profile-photo-whatsapp-4 2.png' 
}




  ngOnInit(): void {
  }

}
