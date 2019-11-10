import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  endpoint : 'https://fmanagerapi.herokuapp.com/'
  // endpoint : 'http://localhost:3000/'
  private income: string = this.endpoint + 'income/';
  private incomeone: string = this.endpoint + 'incomeone/';

  constructor(private _http:HttpClient) { }
  getIncomeByFkuserid(fkuserid){    
    return this._http.get(this.incomeone+fkuserid);
  }
  getIncomeByIid(iid){
    return this._http.get(this.income+iid);
  }
  addIncome(item){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.income,body,{headers:head1});
  }
  deleteIncome(iid){
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.income+iid,{headers:head1});
  }
  updateIncome(item){
    let body=JSON.stringify(item);
      let head1=new HttpHeaders().set('Content-Type','application/json');
      return this._http.put(this.income+item.iid,body,{headers:head1});
  }
}
