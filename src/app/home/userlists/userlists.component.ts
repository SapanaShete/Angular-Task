import { Component, OnInit } from '@angular/core';
import {UserserviceService } from '../../services/userservice.service';




@Component({
  selector: 'app-userlists',
  templateUrl: './userlists.component.html',
  styleUrls: ['./userlists.component.css']
})
export class UserlistsComponent implements OnInit {
  users: any;
 
  constructor(private userService: UserserviceService) { }


  ngOnInit() {
    this.getUsers()
  }
  getUsers(): void {
    this.userService.getUsers()
      .subscribe(res => {
        console.log(res);
        if(res.length>0){
          // for(let i=0;i<res.length;i++){
          //   this.users.push(res[i])
          // }
          this.users = res;
          console.log("this.users",this.users)
        }
      
      }, err => {
        console.log(err);
      });
   
  }

  ondeleteUser(id){
    this.userService.deleteUsers(id).subscribe(
      res => {     
        this.getUsers();
      }, err => {
        console.log(err);
      });
    }
  }

