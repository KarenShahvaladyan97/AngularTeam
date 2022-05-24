import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public projectItemsArray = [
    {
      username: "Gevorg Arakel",
      icon: "../../../assets/stageApp.png",
      user: '../../../assets/prof1.png',      
      status:'Finished'
    },
    {
      username: "Poxos Poxosyan",
      icon: "../../../assets/bob.png",
      user: '../../../assets/prof1.png',     
      status:'Ongoing'
    },
    {
      username: "Karen Sargsyan",
      icon: "../../../assets/stageApp.png",
      user: '../../../assets/prof1.png',      
      status:'Finished'
    },
    {
      username: "Gevorg Arakel",
      icon: "../../../assets/stageApp.png",
      user: '../../../assets/prof1.png',      
      status:'Finished'
    },
    {
      username: "Poxos Poxosyan",
      icon: "../../../assets/bob.png",
      user: '../../../assets/prof1.png',     
      status:'Ongoing'
    },
    {
      username: "Karen Sargsyan",
      icon: "../../../assets/stageApp.png",
      user: '../../../assets/prof1.png',      
      status:'Finished'
    },
    {
      username: "Davo Arakel",
      icon: "../../../assets/stageApp.png",
      user: '../../../assets/prof1.png',      
      status:'Finished'
    },
    {
      username: "Poxos Poxosyan",
      icon: "../../../assets/bob.png",
      user: '../../../assets/prof1.png',     
      status:'Ongoing'
    },
    {
      username: "Karen Sargsyan",
      icon: "../../../assets/stageApp.png",
      user: '../../../assets/prof1.png',      
      status:'Finished'
    },
    {
      username: "Poxos Poxosyan",
      icon: "../../../assets/bob.png",
      user: '../../../assets/prof1.png',     
      status:'Ongoing'
    },
  ]



  constructor() { }
  

  ngOnInit(): void {
  }

}
