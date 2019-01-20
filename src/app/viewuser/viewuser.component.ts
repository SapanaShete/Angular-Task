import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UserserviceService } from '../services/userservice.service';




@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {
  email;
  user //={
  //   id: "",
  //   name: "",
  //   surName:"",
  //   email:"",
  //   gender:"",
  //   city:"",
  //   skills:[],
  //   uploadFileName:"",
  // }
  constructor(private route: ActivatedRoute,private userService: UserserviceService) { }

  ngOnInit() {   this.email= this.route.snapshot.paramMap.get('email');
  if(this.email){
        this.getUser(this.email)
  }
 }

getUser(email){
  this.userService.getUser(email)
    .subscribe(user =>
       this.user = user,
      
     
      );
    }
}
