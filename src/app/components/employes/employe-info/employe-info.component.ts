import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-employe-info',
  templateUrl: './employe-info.component.html',
  styleUrls: ['./employe-info.component.scss']
})
export class EmployeInfoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe((param: any) => {
      console.log(param);
      if(param.id) {

      }
    })
  }
  ngOnInit(): void {
  }

}
