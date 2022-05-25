import { Component, OnInit } from '@angular/core';
import {Transition} from '../../models/transition'
@Component({
  selector: 'app-transation',
  templateUrl: './transation.component.html',
  styleUrls: ['./transation.component.scss']
})
export class TransationComponent implements OnInit {

  public containItems: Transition[] = [
    {
      sourceImg:'../../../assets/2s.png',
      appliedDate:'causal leave',
      direction:'8.21.2021 - 8.22.2021',
      clientName:'Name01',
      duration:'1 Month        ',
       description:'Lorem Ipsnce the 1500s, when an unknown printer took a galley of type specimen book.',
    },
    {
      sourceImg:'../../../assets/3s.png',
      appliedDate:'causal leave',
      direction:'8.21.2021 - 8.22.2021',
      clientName:'Name02',
      duration:'2 Month        ',
       description:'Lorem Ipsnce the 1500s, when an unknown printer took a galley of type specimen book.',
    },
    {
      sourceImg:'../../../assets/4s.png',
      appliedDate:'causal leave',
      direction:'8.21.2021 - 8.22.2021',
      clientName:'...',
      duration:'2 Month        ',
       description:'Lorem Ipsnce the 1500s, when an unknown printer took a galley of type specimen book.',
    },
    {
      sourceImg:'../../../assets/1s.png',
      appliedDate:'causal leave',
      direction:'8.21.2021 - 8.22.2021',
      clientName:'Name02',
      duration:'2 Month        ',
       description:'Lorem Ipsnce the 1500s, when an unknown printer took a galley of type specimen book.',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
