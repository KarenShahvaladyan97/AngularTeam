import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {


  public menuItems = [
    {
      tittle: 'Dshboard',
      icon: '../../../assets/menu.png'
    },
    {
      tittle: 'Reports',
      icon: '../../../assets/statistic.png'
    },
    {
      tittle: 'Financial',
      icon: '../../../assets/money.png',
      path:'/transation'
    },
    {
      tittle: 'Projects',
      icon: '../../../assets/1.png',
      path:'/projects',
    },
    {
      tittle: 'Employee Information',
      icon: '../../../assets/2.png',
      path:'/employees',
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

  constructor() { }

  ngOnInit(): void {
  }

}
