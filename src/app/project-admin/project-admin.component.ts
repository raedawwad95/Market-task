import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../service.service"

@Component({
  selector: 'app-project-admin',
  templateUrl: './project-admin.component.html',
  styleUrls: ['./project-admin.component.css']
})
export class ProjectAdminComponent implements OnInit {
  name = "";
  from = "";
  to = "";
  display = "none";
  displayEdit = 'none';
  fromEdit = 0;
  toEdit = "";
  type = "";
  typeEdit = "";
  nameEdit = "";
  projects: any = [];
  constructor(private _service: ServiceService) { }

  ngOnInit() {
    this._service.getProjectsData().subscribe(project => {
      this.projects = project;
    });
  }

  edit(name) {
    this.displayEdit = 'block';
    this.nameEdit = name;
  }
  addProject() {
    this.display = "block";
  }
  onChangeName(name) {
    this.name = name;
  }
  onChangeFrom(from1) {
    this.from = from1;
  }
  onChangeType(type) {
    this.type = type;
  }
  onChangeTo(to) {
    this.to = to;
  }
  onChangeFromEdit(from1) {
    this.fromEdit = from1;
  }
  onChangeTypeEdit(type) {
    this.typeEdit = type;
  }
  onChangeToEdit(to) {
    this.toEdit = to;
  }

  editProject() {
    this._service.editProject(this.nameEdit, this.typeEdit, this.fromEdit, this.toEdit);
    location.reload();
  }
  saveData() {
    this._service.addProject(this.name, this.type, this.from, this.to)
    this.display = 'none';
    location.reload();
  }
  delete(project: any) {
    this._service.deleteProject(project);
    location.reload();
  }
  onCloseHandled() {
    this.display = 'none';
  }
  onCloseHandledEdit() {
    this.displayEdit = 'none';
  }
}
