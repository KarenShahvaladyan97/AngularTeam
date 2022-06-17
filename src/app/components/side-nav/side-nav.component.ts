import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {

  }

  public menuItems = [
    {
      tittle: 'Dshboard',
      icon: '../../../assets/menu.png',
      path: '/dashboard'

    },
    {
      tittle: 'Reports',
      icon: '../../../assets/statistic.png',
      path:'/reports'
    },
    {
      tittle: 'Financial',
      icon: '../../../assets/money.png',
      path: '/transactions'
    },
    {
      tittle: 'Projects',
      icon: '../../../assets/1.png',
      path: '/projects'
    },
    {
      tittle: 'Employee Information',
      icon: '../../../assets/2.png',
      path: '/employees'
    },



  ]

  public menuSettingsItems = [
    {
      tittle: 'Settings',
      icon: '../../../assets/settings.png',
      submenuItems: [
        {
          tittle: 'Expense Categories',
          icon: '../../../assets/money.png'
        },
        {
          tittle: 'Recurring expenses',
          icon: '../../../assets/money.png'
        },]
    },

    {
      tittle: 'Website',
      icon: '../../../assets/globe.png',
      submenuItems: []
    }]




  ngOnInit(): void {
  }

  navigate(item: any) {
    this.router.navigate([item.path]);
this.headerService.setHeaderTitle(item.tittle)


  }

}
