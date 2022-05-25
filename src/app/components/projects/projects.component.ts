import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public projectItemsArray: Project[] = [
    {
      clientContact: {
        name: "Poxos Poxosyan",
        img: "../../../assets/prof1.png"
      },
      title: 'Stage App',
      icon: "../../../assets/stageApp.png",
      developers: [
        {
          img: "../../../assets/prof1.png",
          profession: "driver",
          fullName: "Vardan",
          addres: "Gyumri",
          phone: 37477775747
        },
        {
          img: "../../../assets/prof2.png",
          profession: "groxusevcav",
          fullName: "Arman",
          addres: "Erevan",
          phone: 37477775747
        },
        {
          img: "../../../assets/prof3.png",
          profession: "driver",
          fullName: "Vardan",
          addres: "Gyumri",
          phone: 37477775747
        }
      ],          
      status: 'Finished',
      technologies: [
        "Stripe", "MySQL", "YII/YII2", "Angular"
      ],
      taskCompleted: 98
    },



    
  ]



  constructor() { }


  ngOnInit(): void {
  }

}
