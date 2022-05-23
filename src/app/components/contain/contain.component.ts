import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contain',
  templateUrl: './contain.component.html',
  styleUrls: ['./contain.component.scss']
})
export class ContainComponent implements OnInit {

  public containItems = [
    {
      tittle: 'Rent',
      img: '../../../assets/Group 34.png'
    },
    {
      tittle: 'Properties',
      img: '../../../assets/Group 34.png'
    },
    {
      tittle: 'Tax',
      img: '../../../assets/Group 34.png'
    },
    {
      tittle: 'Bonuses',
      img: '../../../assets/Group 34.png'
    },
    {
      tittle: 'Internet',
      img: '../../../assets/Group 34.png'
    },
    {
      tittle: 'Coffee',
      img: '../../../assets/Group 34.png'
    },
    {
      tittle: 'Salary',
      img: '../../../assets/Group 34.png'
    },
    {
      tittle: 'Transaction Fee',
      img: '../../../assets/Group 34.png'
    },
    {
      tittle: 'Online tools',
      img: '../../../assets/Group 34.png'
    },
    {
      tittle: 'New office transfer',
      img: '../../../assets/Group 34.png'
    },
    {
      tittle: 'Other',
      img: '../../../assets/Group 34.png'
    },
    {
      tittle: 'Utilities',
      img: '../../../assets/Group 34.png'
    },
    {
      tittle: 'Accounting',
      img: '../../../assets/Group 34.png'
    },

  ]



  constructor() { }

  ngOnInit(): void {
  }

}
