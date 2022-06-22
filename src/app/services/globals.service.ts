import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../models/country';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

  constructor(private http: HttpClient
    ) { }

    getCoutries(): Observable<Country[]>{
      return this.http.get<Country[]>('https://raw.githubusercontent.com/ChristinaAjemyan/js_group_1/master/data/country.json')
    }

    getEmployes(): Observable<User[]>{
      return this.http.get<User[]>('https://raw.githubusercontent.com/ChristinaAjemyan/js_group_1/master/data/employees.json')
    }
}
