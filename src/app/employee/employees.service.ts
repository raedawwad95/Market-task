import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';

var serverApi = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: Http, private httpClient: HttpClient) {}

  getEmployeesData() {
    return this.http.get(`${serverApi}/employee/retrieve/`).pipe(map(res => res.json()));
  }

  deleteEmployee(empl: any) {

    return this.http.delete(`${serverApi}/employee/${empl}`).subscribe(res => console.log(res.json()));
  }
  addEmployee(name: any, nationality: any, jobTitle: any) {

    this.http.post(`${serverApi}/employee/add/`, { name: name, nationality: nationality, jobTitle: jobTitle }).subscribe(res => console.log(res.json()));

  }

  editEmployee(name: any, jobTitle: any) {
    this.http.put(`${serverApi}/employee/edit/`, { name: name, jobTitle: jobTitle }).subscribe(res => alert(res.json()));
  }
}
