import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-item',
  templateUrl: './footer-item.component.html',
  styleUrls: ['./footer-item.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }
@Input() menuItem: { tittle: string ,icon: string, submenuItems: any[]; }


  ngOnInit(): void {
    
  }

}
