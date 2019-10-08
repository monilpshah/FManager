import { Injectable } from '@angular/core';
import { forgotpassword } from '../Classes/forgotPassword';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { user } from '../Classes/user';
import { url } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  private email:string= url.endpoint + 'forgotpassword/';
  
  constructor(private _http:HttpClient) { }  

  sendmail(item:forgotpassword){
    let body=JSON.stringify(item)
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.email,body,{headers:head1})
  }
}
