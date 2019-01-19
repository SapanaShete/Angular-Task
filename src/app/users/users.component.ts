import { Component, OnInit } from '@angular/core';
import{CITIES} from '../cities'
import { Master } from '../master';
import {SKILLS} from '../skills';
import {UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  featureSelected="createusers";
  user ={
    id: "",
    name: "",
    surName:"",
    email:"",
    gender:"",
    city:"",
    skills:[],
    uploadFileName:""
  }
  cities:Master[]=CITIES
  skills:Master[]=SKILLS
  fileToUpload: File = null;
  constructor(private userService: UserserviceService) { }

  ngOnInit() {
   
  }
  
  onChangeMenu(featureSelected){
    console.log(featureSelected)
  this.featureSelected=featureSelected
  }


 
  updateCheckedOptions(skill) {
    this.user.skills.push(skill.name)
 }
 handleFileInput(files: FileList) {
  console.log(files)
  this.fileToUpload = files.item(0);
}

 onUpload(){

  console.log( this.fileToUpload.name)
  this.user.uploadFileName=this.fileToUpload.name
 }
//  addUser(user): void {
//   this.userService.addUser(user)
// }
  onSubmit(user){
    console.log(user);
    //this.addUser(user)
    this.userService.addUser(user)
    
   }

}
