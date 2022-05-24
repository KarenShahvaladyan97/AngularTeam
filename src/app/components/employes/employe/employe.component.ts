import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.scss']
})
export class EmployeComponent implements OnInit {

  constructor() { }
  @Input () user:{img:string,profession:string,fullName:string,addres:string,phone:number}
  ngOnInit(): void {
  }

}
