import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../service.service";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  name = "";
  nationality = "";
  jobTitle = "";
  display = 'none';
  displayEdit = 'none';
  jobTitleEdit = "";
  nameEdit = "";
  employees: any = [];
  constructor(private _service: ServiceService) { }

  ngOnInit() {
    this._service.getEmployeesData().subscribe(employee => {
      this.employees = employee;

    });
  }

  delete(empl: any) {
    this._service.deleteEmployee(empl);
    location.reload();
  }
  edit(name) {
    this.displayEdit = 'block';
    this.nameEdit = name;
  }
  onCloseHandledEdit() {
    this.displayEdit = 'none';
  }
  addEmployee() {
    this.display = 'block';
  }
  onChangeJobEdit(jobTitle) {
    this.jobTitleEdit = jobTitle;
  }
  editEmployee() {
    if(this.jobTitleEdit.length !==0){
    this._service.editEmployee(this.nameEdit, this.jobTitleEdit);
    location.reload();
  }else{
    alert("Please Enter Job Title")
  }
  }
  onCloseHandled() {
    this.display = 'none';
  }
  onChangeName(name) {
    this.name = name;
  }
  onChangeNatio(nationality) {
    this.nationality = nationality;
  }
  onChangeJob(jobTitle) {
    this.jobTitle = jobTitle;
  }
  saveData() {
    if(this.name.length !==0 && this.nationality.length !==0 && this.jobTitle.length !==0)
    {
    this._service.addEmployee(this.name, this.nationality, this.jobTitle);
    this.display = 'none';
    location.reload();
  }else{
    alert("Please Enter Name Or Nationality Or JobTitle")
  }
  }
}
