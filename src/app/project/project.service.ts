import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';

var serverApi = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: Http, private httpClient: HttpClient) { }

  getProjectsData() {
    return this.http.get(`${serverApi}/project/retrieve/`).pipe(map(res => res.json()));
  }

}
