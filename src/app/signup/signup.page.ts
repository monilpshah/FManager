import { Component, OnInit } from '@angular/core';
import { user } from '../Classes/user';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

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
  constructor(public loadingController: LoadingController,private _user: UserService, private _route: Router) { }

  ngOnInit() {
    this.presentLoadingWithOptions(4000);
  }
  signup(){
    if(this.email==""){
      alert("Please enter valid Email.");
    }
    else if(this.password==""){
      alert("Please enter valid password.");
    }
    else if(this.name==""){
      alert("Please enter valid name.");
    }
    else if(this.phone==null){
      alert("Please enter valid phone");
    }
    else{
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
  forgotPassword(){
    this._route.navigate(['forgot-password']);
  }
  login(){
    this._route.navigate(['home']);
  }
  async presentLoadingWithOptions(ms) {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: ms,
      message: 'Loading...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }
}
