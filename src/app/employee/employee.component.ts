import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../service.service";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: any = [];
  constructor(private _service: ServiceService) { }

  ngOnInit() {
  	this._service.getEmployeesData().subscribe(employee => {
        this.employees = employee;
        
  });
  }

   delete( empl:any){
    this._service.deleteEmployee(empl);
}
   edit(){
    console.log("edit")
   }
}
