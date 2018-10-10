import { Component, OnInit } from '@angular/core';
import { ProjectAdminService } from "./project-admin.service"

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
  fromEdit = "";
  toEdit = "";
  type = "";
  typeEdit = "";
  nameEdit = "";
  projects: any = [];
  constructor(private _service: ProjectAdminService) { }

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
    if(this.typeEdit.length !==0 && this.fromEdit.length !==0 && this.toEdit.length !==0){
      this._service.editProject(this.nameEdit, this.typeEdit, this.fromEdit, this.toEdit);
      location.reload();
    }else{
      alert("Please Enter Type Or Date");
    }
    
  }
  saveData() {
    if(this.name.length !== 0 && this.type.length !==0 && this.from.length !==0 && this.to.length !==0){
    this._service.addProject(this.name, this.type, this.from, this.to)
    this.display = 'none';
    location.reload();
  }else{
    alert("Please Enter Name Or Type Or Date");
  }
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
