import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';
import { ForgotPasswordService } from '../Services/forgot-password.service';
import { forgotpassword } from '../Classes/forgotPassword';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  email: string;
  password: string;
  constructor(private _user: UserService, private _route: Router, private _forgotpassword: ForgotPasswordService) { }

  ngOnInit() {
  }
  onforget() {
    this._user.getUserByEmail(this.email).subscribe(
      (data: any) => {
        if (data.length > 0) {
          this.password = data[0].password;
          this._forgotpassword.sendmail(new forgotpassword(this.email, "FManager Password", "Your Password Is : " + this.password)).subscribe(
            (data: forgotpassword[]) => {
              console.log(data);
            }
          );
          alert("Password sent.");
          this._route.navigate(['home']);
        }
        else {
          alert("This Email Id is not valid. Please Enter registered Email Id. ");
        }
      }
    );
  }

}
