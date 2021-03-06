import { Component, OnInit } from '@angular/core';
import { EquipmentService } from "./equipment.service";
import $ from 'jquery';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  name = "";
  serialNumber = 0;
  image = "";
  display = 'none';
  displayEdit = 'none';
  serialEdit = 0;
  imageEdit = "";
  nameEdit = "";
  displayImage = 'none';
  displayImageEdit = 'none';
  waitToUp = 'block';
  equipments: any = [];
  constructor(private _service: EquipmentService) { }

  ngOnInit() {
    this._service.getEquipmentsData().subscribe(equipment => {
      this.equipments = equipment;

    });
  }
  onChangeImage(image) {
    var imgReader = new FileReader();
    var img = image.target.files[0];
    var that = this;
    var imgCode = ''
    var target = image.target.name;
    imgReader.readAsDataURL(img)
    imgReader.onload = function (upload: any) {
      imgCode = upload.target.result;
      imgCode = imgCode.slice(22)
      $.ajax({
        url: `https://api.imgur.com/3/image`,
        method: 'POST',
        headers: { "Authorization": "Client-ID 307e8453e9ee1b3" },
        data: imgCode
      })
        .done(function (data) {

          that.image = data.data.link;
          that.displayImage = 'block';
          that.waitToUp = 'none';

        })
        .fail(function (jqXHR, textStatus) {
          alert("item not found, textStatus");
        });
    };

  }
  delete(equi: any) {
    this._service.deleteEquipment(equi);
    location.reload();
  }
  edit(name) {
    this.displayEdit = 'block';
    this.nameEdit = name;
  }
  onCloseHandledEdit() {
    this.displayEdit = 'none';
  }
  addEquipment() {
    this.display = 'block';
  }
  onChangeSerialEdit(serialNumber) {
    this.serialEdit = serialNumber;
  }
  editEquipment() {
    if(this.serialEdit !==0 && this.imageEdit.length !==0){
     this._service.editEquipment(this.nameEdit, this.serialEdit, this.imageEdit);
    location.reload(); 
    }else{
      alert("Please Enter SerialNumber Or Image")
    }
  }
  onCloseHandled() {
    this.display = 'none';
  }
  onChange(e) {
    if(e.target.name==="name"){
      this.name=e.target.value;
    }else if(e.target.name==="serialNumber"){
      this.serialNumber=e.target.value;
    }
  }

  onChangeImageEdit(image) {
    var imgReader = new FileReader();
    var img = image.target.files[0];
    var that = this;
    var imgCode = ''
    var target = image.target.name;
    imgReader.readAsDataURL(img)
    imgReader.onload = function (upload: any) {
      imgCode = upload.target.result;
      imgCode = imgCode.slice(22)
      $.ajax({
        url: `https://api.imgur.com/3/image`,
        method: 'POST',
        headers: { "Authorization": "Client-ID 307e8453e9ee1b3" },
        data: imgCode
      })
        .done(function (data) {

          that.imageEdit = data.data.link;
          that.displayImageEdit = 'block';
          that.waitToUp = 'none';

        })
        .fail(function (jqXHR, textStatus) {
          alert("item not found, textStatus");
        });
    };
  }
  saveData() {
    if(this.name.length !==0 && this.serialNumber !==0 && this.image.length !==0){
      this._service.addEquipment(this.name, this.serialNumber, this.image)
      this.display = 'none';
      location.reload();
    }else{
      alert("Please Enter Name Or SerialNumber Or Image")
    }
    

  }
}
