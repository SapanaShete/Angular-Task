import { Component, OnInit,Input } from '@angular/core';
import { FormControl, EmailValidator } from '@angular/forms';
import { Capability } from 'protractor';
import { UserData } from '../../userData';
import{CITIES} from '../../cities'
import { Master } from '../../master';
import {SKILLS} from '../../skills';

@Component({
  selector: 'app-createusers',
  templateUrl: './createusers.component.html',
  styleUrls: ['./createusers.component.css']
})
export class CreateusersComponent implements OnInit {
  // name = new FormControl('');
  @Input() uploadFile: any;
  user ={
    id: "",
    name: "",
    surName:"",
    email:"",
    gender:"",
    city:"",
    skills:[],
    // uploadFile:
  }
  cities:Master[]=CITIES
  skills:Master[]=SKILLS
  optionsChecked = [];
  constructor() { }

  ngOnInit() {
    console.log(this.user)
  }
  updateCheckedOptions(skill) {
    this.user.skills.push(skill.name)
 }
  onSubmit(user){
    alert(JSON.stringify(user))
    console.log(user);
      //  let user = {
      //    name: name,
      //    surName: surname,
      //    email:email,
      //    gender:gender,
      //    city:Capability,
      //    skills:[]

      //  }
      //  let item = new Ingredient(ingredientName, amount);
      //  this.ingredient.emit(item);
  //    }
   }

}
