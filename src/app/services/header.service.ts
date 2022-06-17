import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HeaderService {

  constructor() { }

  
  headerTitle = new Subject<string>();
  
  setHeaderTitle (title:string):void{
    this.headerTitle.next(title)
  }
  
}
