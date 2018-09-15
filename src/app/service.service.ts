import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {HttpClient} from '@angular/common/http';


var serverApi= 'http://localhost:3000';

@Injectable({
	providedIn: 'root'
})


export class ServiceService {
constructor(private http: Http,private httpClient: HttpClient) { }

getEmployeesData() {
    return this.http.get(`${serverApi}/employee/retrieve/`).pipe(map(res => res.json()));
  }
}