import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';

var serverApi = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class ProjectAdminService {

  constructor(private http: Http, private httpClient: HttpClient) { }


  deleteProject(pro: any) {

    return this.http.delete(`${serverApi}/project/${pro}`).subscribe(res => console.log(res.json()));
  }
  editProject(name: any, type: any, from1: any, to: any) {
    this.http.put(`${serverApi}/project/edit/`, { name: name, type: type, from: from1, to: to }).subscribe(res => console.log(res.json()));
  }

  addProject(name: any, type: any, from1: any, to: any) {
    this.http.post(`${serverApi}/project/add`, { name: name, type: type, from: from1, to: to }).subscribe(res => console.log(res.json()));
  }
  getProjectsData() {
    return this.http.get(`${serverApi}/project/retrieve/`).pipe(map(res => res.json()));
  }
}
