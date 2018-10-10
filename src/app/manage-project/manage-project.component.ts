import { Component, OnInit, Input } from '@angular/core';
import { ManageProjectService } from "./manage-project.service"

@Component({
  selector: 'app-manage-project',
  templateUrl: './manage-project.component.html',
  styleUrls: ['./manage-project.component.css']
})
export class ManageProjectComponent implements OnInit {
  @Input() nameProject: string;

  employees: any = [];
  equipments: any = [];
  assinEmp: any = [];
  assinEqu: any = [];
  emplname = "";
  equname = "";
  succToSave = 0;
  constructor(private _service: ManageProjectService) { }

  ngOnInit() {
    this.assinEqu=[];
    this.assinEmp=[];
    this._service.getEmployeesData().subscribe(employee => {
      this.employees = employee;

    });
    this._service.getEquipmentsData().subscribe(equipment => {
      this.equipments = equipment;

    });
  }

  saveDate() {
    if (this.assinEmp.length <=1 && this.assinEqu.length <= 1 && this.succToSave !==0 ) {
      this._service.addEmpToProject(this.nameProject, this.emplname);
      this._service.addEquToProject(this.nameProject, this.equname);
      location.reload();
    } else {
      alert("you can just Enter One Employee And One Equipment Or One of them")
    }

  }
  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    this.assinEmp.push({ name: data });
    this.emplname = data;
    this.succToSave++;
    ev.target.appendChild(document.getElementById(data));
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  dropEq(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    this.assinEqu.push({ name: data });
    this.equname = data;
    this.succToSave++;
    ev.target.appendChild(document.getElementById(data));
  }

  allowDropEq(ev) {
    ev.preventDefault();
  }

  dragEq(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
}


