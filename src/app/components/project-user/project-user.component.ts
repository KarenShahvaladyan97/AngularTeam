import { Component, OnInit, Input } from '@angular/core';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-project-user',
  templateUrl: './project-user.component.html',
  styleUrls: ['./project-user.component.scss']
})
export class ProjectUserComponent implements OnInit {
  

  constructor() { }
  @Input() projectItem: { title: string ,icon: string, clientContact: Client, status: string,
  developers:{img: string, profession: string, fullName: string, 
    addres: string, phone: number }[], technologies: string[], taskCompleted: number }
    
  ngOnInit(): void {
  }

}
