import { Injectable } from '@angular/core';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class PdrojectListService {

  constructor() { }

  public projectItemsArray: Project[] = [
    {
      id:1,
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
    {
      id:2,
      clientContact: {
        name: "grox u sev cav",
        img: "../../../assets/prof2.png"
      },
      title: 'Stage App',
      icon: "../../../assets/stageApp.png",
      developers: [
        {
          img: "../../../assets/prof3.png",
          profession: "driver",
          fullName: "Vardan",
          addres: "Gyumri",
          phone: 37477775747
        },
        {
          img: "../../../assets/prof1.png",
          profession: "groxusevcav",
          fullName: "Arman",
          addres: "Erevan",
          phone: 37477775747
        },
        {
          img: "../../../assets/prof2.png",
          profession: "driver",
          fullName: "Vardan",
          addres: "Gyumri",
          phone: 37477775747
        }
      ],          
      status: 'Finished',
      technologies: [
        "React", "Java", "Angular", "Pytom"
      ],
      taskCompleted: 75
    },
    {
      id:3,
      clientContact: {
        name: "Vardan Mamikonyan",
        img: "../../../assets/prof3.png"
      },
      title: 'Stage App',
      icon: "../../../assets/stageApp.png",
      developers: [
        {
          img: "../../../assets/prof2.png",
          profession: "driver",
          fullName: "Vardan",
          addres: "Gyumri",
          phone: 37477775747
        },
        {
          img: "../../../assets/prof1.png",
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
      status: 'Pending',
      technologies: [
        "Angular", "React", "MySQL", "YII/YII2"
      ],
      taskCompleted: 89
    }
  ]
}
