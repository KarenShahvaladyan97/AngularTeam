import { Injectable } from '@angular/core';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class PdrojectListService {
  public projectItemsArray: Project[]
  constructor() {
    const project:any = localStorage.getItem('project')
    const arr: any = JSON.parse(project)
    this.projectItemsArray = arr || []
   }



  addproject(value: any) {
    
    this.projectItemsArray.push(value)


    localStorage.setItem('project', JSON.stringify(this.projectItemsArray))
  }


}

// id: any;
// details: string;
// details2:string;
// icon: string;
// client:string;     
// status:string;
// country:string