import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-user',
  templateUrl: './project-user.component.html',
  styleUrls: ['./project-user.component.scss']
})
export class ProjectUserComponent implements OnInit {
  

  constructor() { }
  @Input() projectItem: { username: string ,icon: string, user: string, status: string }
  ngOnInit(): void {
  }

}
