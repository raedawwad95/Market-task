import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";
import { HttpClient} from '@angular/common/http';


var serverApi= 'http://localhost:3000';

@Injectable({
	providedIn: 'root'
})


export class ServiceService {
constructor(private http: Http,private httpClient: HttpClient) { }

getEmployeesData() {
    return this.http.get(`${serverApi}/employee/retrieve/`).pipe(map(res => res.json()));
  }

  
  deleteEmployee(empl: any) {
  	
    return this.http.delete(`${serverApi}/employee/${empl}`).subscribe(res => console.log(res.json()));
  }
  addEmployee(name:any,nationality:any,jobTitle:any){

  this.http.post(`${serverApi}/employee/add/`, {name:name,nationality:nationality,jobTitle:jobTitle}).subscribe(res => console.log(res.json()));
  }

  editEmployee(name:any,jobTitle:any){
  	this.http.put(`${serverApi}/employee/edit/`, {name:name,jobTitle:jobTitle}).subscribe(res => console.log(res.json()));
  }


  getEquipmentsData() {
    return this.http.get(`${serverApi}/equipment/retrieve/`).pipe(map(res => res.json()));
  }
  deleteEquipment(equi: any) {
    
    return this.http.delete(`${serverApi}/equipment/${equi}`).subscribe(res => console.log(res.json()));
  }
  addEquipment(name:any,serialNumber:any,image:any){

  this.http.post(`${serverApi}/equipment/add/`, {name:name,serialNumber:serialNumber,image:image}).subscribe(res => console.log(res.json()));
  }
  editEquipment(name:any,serialNumber:any,image:any){
    this.http.put(`${serverApi}/equipment/edit/`, {name:name,serialNumber:serialNumber,image:image}).subscribe(res => console.log(res.json()));
  }
  addProject(name:any , from:any,to:any){
    this.http.post(`${serverApi}/project/add`,{name:name,from:from,to:to}).subscribe(res=>console.log(res.json()));
  }


  getProjectsData() {
    return this.http.get(`${serverApi}/project/retrieve/`).pipe(map(res => res.json()));
  }
}