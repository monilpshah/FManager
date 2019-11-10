import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  endpoint : 'https://fmanagerapi.herokuapp.com/'
  // endpoint : 'http://localhost:3000/'
  private expense: string = this.endpoint + 'expense/';
  private expenseone: string = this.endpoint + 'expenseone/';

  constructor(private _http:HttpClient) { }
  getExpenseByFkuserid(fkuserid){    
    return this._http.get(this.expenseone+fkuserid);
  }
  getExpenseByEid(eid){
    return this._http.get(this.expense+eid);
  }
  addExpense(item){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.expense,body,{headers:head1});
  }
  deleteExpense(eid){
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.expense+eid,{headers:head1});
  }
  updateExpense(item){
    let body=JSON.stringify(item);
      let head1=new HttpHeaders().set('Content-Type','application/json');
      return this._http.put(this.expense+item.eid,body,{headers:head1});
  }
}
