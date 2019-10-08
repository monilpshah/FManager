import { Component, OnInit } from '@angular/core';
import { expense } from '../Classes/expense';
import { ExpenseService } from '../Services/expense.service';
import { UserService } from '../Services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.page.html',
  styleUrls: ['./expense.page.scss'],
})
export class ExpensePage implements OnInit {

  constructor(public loadingController: LoadingController, private _expense: ExpenseService, private _user: UserService, private _acroute: ActivatedRoute, private _route: Router) { }

  userid: number;
  email: string;
  expense: expense[];
  grandtotal: number = 0;
  i: number = 0;
  ngOnInit() {
    this.userid = Number(localStorage.getItem('userid'));
    this.email = localStorage.getItem('email');
    this.grandtotal=0;
    this._expense.getExpenseByFkuserid(this.userid).subscribe(
      (data: expense[]) => {
        this.expense = data;
        for (this.i = 0; this.i < this.expense.length; this.i++) {
          this.grandtotal = this.grandtotal + this.expense[this.i].amount;
        }
      }
    );
  }
  editExpense(eid) {
    this._route.navigate(['edit-income-expense', eid, "Expense"]);
  }
  deleteExpense(eid){
    this._expense.deleteExpense(eid).subscribe(
      (data:any)=>{
        alert("Expense has been deleted");
        this.ngOnInit();
      }
    );
  }
  onClickAddIncome(){
    this._route.navigate(['add-income-expense']);
  }
  onClickAddExpense(){
    this._route.navigate(['add-income-expense']);
  }
  onClickAddNote(){
    this._route.navigate(['add-note']);
  }
  sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break;
      }
    }
  }  
  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
    }, 2000);
    this.ngOnInit();
  }
}
