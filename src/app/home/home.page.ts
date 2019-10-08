import { Component } from '@angular/core';
import { user } from '../Classes/user';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  email: string;
  password: string;
  userid: number;
  user: user;
  constructor(private _user: UserService, private _route: Router) { }
  ngOnInit() {

  }
  login() {
    this._user.getUserByEmail(this.email).subscribe(
      (data: any) => {
        if (data.length == 1) {
          if (data[0].password == this.password) {
            localStorage.setItem('email', this.email);
            localStorage.setItem('userid', data[0].userid);
            alert("Login Successful.");
            this._route.navigate(['income']);
          }
          else{
            alert("Wrong Password. Please Try Again.");
          }
        }
        else {
          alert("Invalid Login. Try Again");
        }
      }
    );
  }
  signup(){
    this._route.navigate(['signup']);
  }
  forgotPassword(){
    this._route.navigate(['forgot-password']);
  }
}
