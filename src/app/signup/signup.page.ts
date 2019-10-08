import { Component, OnInit } from '@angular/core';
import { user } from '../Classes/user';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  email: string;
  password: string;
  userid: number;
  user: user;
  name:string;
  phone:number;
  constructor(private _user: UserService, private _route: Router) { }

  ngOnInit() {
  }
  signup(){
    this._user.getUserByEmail(this.email).subscribe(
      (data:any)=>{
        if(data.length>0){
          alert("You are registered user. Please Login");
        }
        else{
          this._user.addUser(new user(0,this.email,this.password,this.name,this.phone,"")).subscribe(
            (data:any)=>{
              console.log(data);
              alert("Registration complete.Please Login");
              this._route.navigate(['home']);
            }
          );
        }
      }
    );
  }

}
