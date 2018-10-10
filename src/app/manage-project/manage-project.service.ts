import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';

var serverApi = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class ManageProjectService {

  constructor(private http: Http, private httpClient: HttpClient) { }
  
  addEmpToProject(name: any, empName: any) {
    console.log(name, empName)
    this.http.post(`${serverApi}/project/addEmpToProj`, { Projectname: name, empName: empName }).subscribe(res => console.log(res.json()));
  }
  addEquToProject(name: any, equName: any) {
    this.http.post(`${serverApi}/project/addEquToProj`, { Projectname: name, equName: equName }).subscribe(res => console.log(res.json()));
  }
  getEquipmentsData() {
    return this.http.get(`${serverApi}/equipment/retrieve/`).pipe(map(res => res.json()));
  }
  getEmployeesData() {
    return this.http.get(`${serverApi}/employee/retrieve/`).pipe(map(res => res.json()));
  }
}
