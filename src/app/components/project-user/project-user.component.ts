import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-project-user',
  templateUrl: './project-user.component.html',
  styleUrls: ['./project-user.component.scss']
})
export class ProjectUserComponent implements OnInit {


  

  constructor() { }
  @Input() projectItem: {details:string, status: string, country:string, client: string, details2:string, tecnologies:string[]}
  @Input() index:number;
  @Output() deleteEmiter = new EventEmitter()
 


  deleteUser(index:any){
    const project:any = localStorage.getItem("project")
    let arr: [] = JSON.parse(project);  
    arr.splice(index, 1);
    localStorage.setItem('project', JSON.stringify(arr));
    this.deleteEmiter.emit(arr)
  }




  

    
  ngOnInit(): void {
  }



}
