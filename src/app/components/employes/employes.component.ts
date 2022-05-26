import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.scss']
})
export class EmployesComponent implements OnInit {
  public usersList:User [] = [
      {
        id:1,
        img:'../../../assets/employeImages/admin.png',
        profession:'CEO',
        fullName:'Gurgen Gharibyan',
        addres:'Gortsaranayin street 5, apt.106',
        phone:37498242565
      },
      {id:2,
        img:'../../../assets/employeImages/user1.jpg',
        profession:'React Developer',
        fullName:'Qristina Achemyan',
        addres:'Gortsaranayin street 5, apt.106',
        phone:37498242565
      },
      {id:3,
        img:'../../../assets/employeImages/user2.jpg',
        profession:'React & Angular Developer',
        fullName:'Gevorg Harutyunyan',
        addres:'Gortsaranayin street 5, apt.106',
        phone:37498242565
      },
      {id:3,
        img:'../../../assets/employeImages/user3.jpg',
        profession:'Project Manager',
        fullName:'Ani Petrosyan',
        addres:'Gortsaranayin street 5, apt.106',
        phone:37498242565
      },
      {id:1,
        img:'../../../assets/employeImages/user4.jpg',
        profession:'SMM',
        fullName:'Yulia Torosyan',
        addres:'Gortsaranayin street 5, apt.106',
        phone:37498242565
      },
      {id:1,
        img:'../../../assets/employeImages/user5.jpg',
        profession:'UI/UX Designer',
        fullName:'Anahit Grigoryan',
        addres:'Gortsaranayin street 5, apt.106',
        phone:37498242565
      },
      {id:1,
        img:'../../../assets/employeImages/user6.jpg',
        profession:'iOS Developer',
        fullName:'Vardan Urumyan',
        addres:'Gortsaranayin street 5, apt.106',
        phone:37498242565
      },
      {id:1,
        img:'../../../assets/employeImages/user7.jpg',
        profession:'Java Developer',
        fullName:'Armen Harutyunyan',
        addres:'Gortsaranayin street 5, apt.106',
        phone:37498242565
      },
      {id:1,
        img:'../../../assets/employeImages/user8.jpg',
        profession:'Php Developer',
        fullName:'Argam tevanyan',
        addres:'Gortsaranayin street 5, apt.106',
        phone:37498242565
      },
      {id:1,
        img:'../../../assets/employeImages/user9.jpg',
        profession:'Node Developer',
        fullName:'Hendo Karapetyan',
        addres:'Gortsaranayin street 5, apt.106',
        phone:37498242565
      }
  ]
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe((param: any) => {
      console.log(param);
      if(param.id) {

      }
    })
  }

  ngOnInit(): void {
  }

  navigate(id: any) {
    this.router.navigate(['/employees', id])


  }
}
