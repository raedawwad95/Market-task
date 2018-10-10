import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';

var serverApi = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

   constructor(private http: Http, private httpClient: HttpClient) { }

   getEquipmentsData() {
    return this.http.get(`${serverApi}/equipment/retrieve/`).pipe(map(res => res.json()));
  }
  deleteEquipment(equi: any) {

    return this.http.delete(`${serverApi}/equipment/${equi}`).subscribe(res => console.log(res.json()));
  }
  addEquipment(name: any, serialNumber: any, image: any) {

    this.http.post(`${serverApi}/equipment/add/`, { name: name, serialNumber: serialNumber, image: image }).subscribe(res => console.log(res.json()));
  }
  editEquipment(name: any, serialNumber: any, image: any) {
    this.http.put(`${serverApi}/equipment/edit/`, { name: name, serialNumber: serialNumber, image: image }).subscribe(res => console.log(res.json()));
  }

}
