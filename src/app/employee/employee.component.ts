import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../service.service";
import $ from "jquery"
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  name ="";
  nationality ="";
  jobTitle = "";
  display='none';
  employees: any = [];
  constructor(private _service: ServiceService) { }

  ngOnInit() {
  	this._service.getEmployeesData().subscribe(employee => {
        this.employees = employee;
        
  });
  }

  delete( empl:any){
    this._service.deleteEmployee(empl);
    location.reload();
   }
  edit(){
    console.log("edit")
  }

  addEmployee(){
    this.display='block'; 
  }
  onCloseHandled(){
       this.display='none'; 
    }
  onChangeName(name){
    this.name=name;
  }
  onChangeNatio(nationality){
    this.nationality=nationality;
  }
  onChangeJob(jobTitle){
    this.jobTitle=jobTitle;
  }
  saveData(){
    console.log(this.name,this.nationality,this.jobTitle)
   this._service.addEmployee(this.name,this.nationality,this.jobTitle)
    this.display='none';
    location.reload();
  }
}
