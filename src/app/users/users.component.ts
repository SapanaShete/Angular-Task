import { Component, OnInit } from '@angular/core';
import{CITIES} from '../cities'
import { Master } from '../master';
import {SKILLS} from '../skills';
import {UserserviceService } from '../services/userservice.service';
import { ActivatedRoute } from '@angular/router';
import { getInheritedFactory } from '@angular/core/src/render3';

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
    uploadFileName:"",
    fileToUpload:{}
  }
  // formData
  //cities:Master[]=CITIES
  cities;
  skills;
  // skills:Master[]=SKILLS
  fileToUpload: File = null;
  constructor(private route: ActivatedRoute,private userService: UserserviceService) { }
email;
formData = new FormData();
  ngOnInit() {
     this.email= this.route.snapshot.paramMap.get('email');
    if(this.email){
          this.getUser(this.email)
    }
 this.getCities();
 this.getSkills();
  }
  getSkills(){
   this.userService.getSkills()
    .subscribe(skills => this.skills = skills);
    console.log(this.skills,"this.skills")
  }
  getCities(){
    this.userService.getCities()
      .subscribe(cities => this.cities = cities);
      console.log(this.cities,"this.cities")
  }
  getUser(email){
    this.userService.getUser(email)
      .subscribe(user => 
        this.user = user
    
        );
    
  }
 
  onChangeMenu(featureSelected){
    console.log(featureSelected)
  this.featureSelected=featureSelected
  }


 
  updateCheckedOptions(skill) {
    this.user.skills.push(skill.name)
 }
 handleFileInput(files: FileList) {
 
  this.fileToUpload = files.item(0);
  console.log(this.fileToUpload)
  
}

 onUpload(){
  
  this.formData.append('uploadFile', this.fileToUpload);
  
  this.user.uploadFileName=this.fileToUpload.name
  
 }
  onSubmit(user){
    // user.formData= this.formData
    // console.log("onsubmit",user)
    this.userService.addUser(user, this.formData).subscribe()
    
   }
   onReset(){
     this.user ={
      id: "",
      name: "",
      surName:"",
      email:"",
      gender:"",
      city:"",
      skills:[],
      uploadFileName:"",
      fileToUpload:{}
    }
   }

}
