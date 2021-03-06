import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  endpoint : 'https://fmanagerapi.herokuapp.com/'
  // endpoint : 'http://localhost:3000/'
  private user: string = this.endpoint + 'user/';
  private userone: string = this.endpoint + 'userone/';

  constructor(private _http:HttpClient) { }
  getUserByUserid(userid){
    return this._http.get(this.user+userid);
  }
  getUserByEmail(email){
    return this._http.get(this.userone+email);
  }
  addUser(item){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.user,body,{headers:head1});
  }
  deleteUser(userid){
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.user+userid,{headers:head1});
  }
  deleteUserByEmail(email){
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.userone+email,{headers:head1});
  }
  updateUser(item){
    let body=JSON.stringify(item);
      let head1=new HttpHeaders().set('Content-Type','application/json');
      return this._http.put(this.user+item.userid,body,{headers:head1});
  }
}
