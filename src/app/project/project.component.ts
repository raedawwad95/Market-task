import { Component, OnInit } from '@angular/core';
import { ProjectService } from "./project.service"
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  name = ""
  display = 'none'
  projects: any = [];
  constructor(private _service: ProjectService) { }

  ngOnInit() {
    this._service.getProjectsData().subscribe(project => {
      this.projects = project;
    });
  }
  nameProject(name) {
    this.name = name;
    this.display = 'block';
  }
  back() {
    this.display = 'none';
    location.reload();
  }
}
