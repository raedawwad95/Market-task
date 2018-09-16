import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../service.service"

@Component({
  selector: 'app-project-admin',
  templateUrl: './project-admin.component.html',
  styleUrls: ['./project-admin.component.css']
})
export class ProjectAdminComponent implements OnInit {
  name ="";
  from ="";
  to ="";
  display ="none";
  projects :any =[];
  constructor(private _service: ServiceService) { }

  ngOnInit() {
  this._service.getProjectsData().subscribe(project => {
        this.projects = project;
  });
  }
   addProject(){
  	this.display="block";
  	console.log(this.projects)
  }
  onChangeName(name){
    this.name=name;
  }
  onChangeFrom(from1){
    this.from=from1;
  }
  onChangeTo(to){
    this.to=to;
  }
  saveData(){
   this._service.addProject(this.name,this.from,this.to)
    this.display='none';
   
    
  }
  onCloseHandled(){
       this.display='none'; 
    }
}
