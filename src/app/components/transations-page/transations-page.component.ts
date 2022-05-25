import { Component, Input, OnInit } from '@angular/core';
import {Transition} from '../../models/transition'
@Component({
  selector: 'app-transations-page',
  templateUrl: './transations-page.component.html',
  styleUrls: ['./transations-page.component.scss']
})
export class TransationsPageComponent implements OnInit {


  @Input() item: Transition;


  constructor() { }

  ngOnInit(): void {
  }

}
