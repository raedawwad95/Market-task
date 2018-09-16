import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../service.service";

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  name ="";
  serialNumber =0;
  image = "";
  display='none';
  displayEdit='none';
  serialEdit=0;
  imageEdit ="";
  nameEdit ="";
  equipments: any = [];
  constructor(private _service: ServiceService) { }

  ngOnInit() {
  	this._service.getEquipmentsData().subscribe(equipment => {
        this.equipments = equipment;
        
  });
  }

  delete( equi:any){
    this._service.deleteEquipment(equi);
    location.reload();
   }
  edit(name){
    this.displayEdit ='block';
    this.nameEdit = name;
  }
  onCloseHandledEdit(){
    this.displayEdit ='none';
  }
  addEquipment(){
    this.display='block'; 
  }
  onChangeSerialEdit(serialNumber,image){
    this.serialEdit=serialNumber;
    this.imageEdit = image;
  }
  editEquipment(){
    this._service.editEquipment(this.nameEdit,this.serialEdit,this.imageEdit);
    location.reload();
  }
  onCloseHandled(){
       this.display='none'; 
    }
  onChangeName(name){
    this.name=name;
  }
  onChangeSerial(serialNumber){
    this.serialNumber=serialNumber;
  }
  onChangeImage(image){
    this.image=image;
  }
  onChangeImageEdit(image){
    this.imageEdit=image;
  }
  saveData(){
   this._service.addEquipment(this.name,this.serialNumber,this.image)
    this.display='none';
    location.reload();
    
  }
}
