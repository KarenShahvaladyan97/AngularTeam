import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { PdrojectListService } from 'src/app/services/pdroject-list.service';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss']
})
export class ProjectInfoComponent implements OnInit {
  public projectList: Project[];
  public user: Project | undefined

  constructor(
    private route: ActivatedRoute,  
    private userService: PdrojectListService
  ) {
    this.route.params.subscribe((param:any)=>{
      this.projectList = this.userService.projectItemsArray;
      if(param.id){
        console.log(param.id)
        this.user = this.projectList.find((item)=> item.id===Number(param.id))
      }

    })


   }

  ngOnInit(): void {
  }

}
