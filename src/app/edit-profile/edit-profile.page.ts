import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { UserService } from '../Services/user.service';
import { user } from '../Classes/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  constructor(public loadingController: LoadingController,public _user:UserService,private _route:Router) { }
  userid:number;
  email:string;
  password:string;
  name:string;
  phone:number;
  ngOnInit() {
    this.userid=Number(localStorage.getItem('userid'));
    this.presentLoadingWithOptions(1250);
    this._user.getUserByUserid(this.userid).subscribe(
      (data:any)=>{
        console.log(data);
        this.email=data[0].email;
        this.password=data[0].password;
        this.name=data[0].name;
        this.phone=data[0].phone;
      }
    );
  }
  save(){
    if(this.email==""){
      alert("Please enter valid Email.")
    }
    else if(this.password==""){
      alert("Please enter valid Password.")
    }
    else if(this.name==""){
      alert("Please enter valid Name.")
    }
    else if(this.phone==null){
      alert("Please enter valid Phone Number.")
    }
    else{
      this._user.updateUser(new user(this.userid,this.email,this.password,this.name,this.phone,"")).subscribe(
        (data:any)=>{
          alert("Profile Updated.");
          this._route.navigate(['login']);
        }
      );
    }
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
