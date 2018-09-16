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


  deleteProject(pro: any) {
    
    return this.http.delete(`${serverApi}/project/${pro}`).subscribe(res => console.log(res.json()));
  }
  editProject(name:any,type:any,from1:any,to:any){
    this.http.put(`${serverApi}/project/edit/`, {name:name,type:type,from:from1,to:to}).subscribe(res => console.log(res.json()));
  }
  addProject(name:any ,type:any, from1:any,to:any){
    this.http.post(`${serverApi}/project/add`,{name:name,type:type,from:from1,to:to}).subscribe(res=>console.log(res.json()));
  }
  getProjectsData() {
    return this.http.get(`${serverApi}/project/retrieve/`).pipe(map(res => res.json()));
  }


  addEmpToProject(name:any ,empName:any){
    console.log(name,empName)
    this.http.post(`${serverApi}/project/addEmpToProj`,{Projectname:name,empName:empName}).subscribe(res=>console.log(res.json()));
  }
  addEquToProject(name:any ,equName:any){
    this.http.post(`${serverApi}/project/addEquToProj`,{Projectname:name,equName:equName}).subscribe(res=>console.log(res.json()));
  }
}