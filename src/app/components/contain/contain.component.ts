import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contain',
  templateUrl: './contain.component.html',
  styleUrls: ['./contain.component.scss']
})
export class ContainComponent implements OnInit {

  public containItems = [
    {
      img:'../../../assets/2s.png',
      title1:'causal leave',
      title2:'8.21.2021 - 8.22.2021',
      title3:'Name01',
      title4:'1 Month        ',
      title5:'Lorem Ipsnce the 1500s, when an unknown printer took a galley of type specimen book.',
    },
    {
      img:'../../../assets/3s.png',
      title1:'causal leave',
      title2:'8.21.2021 - 8.22.2021',
      title3:'Name02',
      title4:'2 Month        ',
      title5:'Lorem Ipsnce the 1500s, when an unknown printer took a galley of type specimen book.',
    },
    {
      img:'../../../assets/4s.png',
      title1:'causal leave',
      title2:'8.21.2021 - 8.22.2021',
      title3:'Name02',
      title4:'2 Month        ',
      title5:'Lorem Ipsnce the 1500s, when an unknown printer took a galley of type specimen book.',
    },
    {
      img:'../../../assets/1s.png',
      title1:'causal leave',
      title2:'8.21.2021 - 8.22.2021',
      title3:'Name02',
      title4:'2 Month        ',
      title5:'Lorem Ipsnce the 1500s, when an unknown printer took a galley of type specimen book.',
    },
  ]



  constructor() { }

  ngOnInit(): void {
  }

}
