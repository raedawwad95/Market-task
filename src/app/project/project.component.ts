import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../service.service"
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  
  projects :any =[];
  constructor(private _service: ServiceService) { }

  ngOnInit() {
  	this._service.getProjectsData().subscribe(project => {
        this.projects = project; 
  });
  }

}
