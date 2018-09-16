import { Component, OnInit,Input } from '@angular/core';
import {ServiceService} from "../service.service"

@Component({
  selector: 'app-manage-project',
  templateUrl: './manage-project.component.html',
  styleUrls: ['./manage-project.component.css']
})
export class ManageProjectComponent implements OnInit {
@Input() nameProject: string;

  employees: any = [];
  equipments: any =[];
  assinEmp: any =[];
  assinEqu: any =[];
  emplname ="";
  equname ="";
  constructor(private _service: ServiceService) { }

  ngOnInit() {
  	this._service.getEmployeesData().subscribe(employee => {
        this.employees = employee;

    });
    this._service.getEquipmentsData().subscribe(equipment => {
        this.equipments = equipment;
        
    });
  }

  assignedEmpl(name){
  	this.assinEmp.push({name:name});
  	this.emplname=name;
  }
  assignedEqui(name){
  	this.assinEqu.push({name:name});
  	this.equname=name;
  }

  saveDate(){
  	this._service.addEmpToProject(this.nameProject,this.emplname);
  	this._service.addEquToProject(this.nameProject,this.equname);
  	location.reload();
  }
  }


