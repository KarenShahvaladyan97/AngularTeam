import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { PdrojectListService } from 'src/app/services/pdroject-list.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public projectItemsArray: Project[];    

  constructor(    
    private router: Router,
    private projectItem: PdrojectListService
  ) { 

    this.projectItemsArray = this.projectItem.projectItemsArray
  }

  myFunc(event:[]){   
    this.projectItemsArray = event
  }




  ngOnInit(): void {
  }
  
  navigate(id: any) {
    this.router.navigate(['/projects', id])
  }

}
