import { Component, OnInit } from '@angular/core';
import { expense } from '../Classes/expense';
import { ExpenseService } from '../Services/expense.service';
import { income } from '../Classes/income';
import { IncomeService } from '../Services/income.service';
import { UserService } from '../Services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-edit-income-expense',
  templateUrl: './edit-income-expense.page.html',
  styleUrls: ['./edit-income-expense.page.scss'],
})
export class EditIncomeExpensePage implements OnInit {

  ieid:number;
  userid:number;
  email:string;
  type:string;
  amount:number;
  comments:string;
  constructor(public loadingController: LoadingController,private _income:IncomeService,private _expense:ExpenseService,private _user:UserService,private _acroute:ActivatedRoute,private _route:Router) { }

  ngOnInit() {
    this.presentLoadingWithOptions(4000);
    this.ieid=this._acroute.snapshot.params['ieid'];
    this.type=this._acroute.snapshot.params['type'];
    this.userid=Number(localStorage.getItem('userid'));    
    this.email=localStorage.getItem('email');
    if(this.type=="Income"){
      this._income.getIncomeByIid(this.ieid).subscribe(
        (data:any)=>{
          this.amount=data[0].amount;
          this.comments=data[0].remarks;
        }
      );
    }
    else if(this.type=="Expense"){
      this._expense.getExpenseByEid(this.ieid).subscribe(
        (data:any)=>{
          this.amount=data[0].amount;
          this.comments=data[0].remarks;
        }
      );
    }
    else{
      alert("Invalid Record to edit. Please Delete it.");
    }
  }
  saveRecord(){
    if(this.type=="Income"){
      this._income.updateIncome(new income(this.ieid,this.userid,this.amount,this.comments,"")).subscribe(
        (data:any)=>{
          alert("Income has been edited.");
          this._route.navigate(['income']);
        }
      );
    }
    else if(this.type=="Expense"){
      this._expense.updateExpense(new expense(this.ieid,this.userid,this.amount,this.comments,"")).subscribe(
        (data:any)=>{
          alert("Expense has been edited.");
          this._route.navigate(['expense']);
        }
      );
    }
    else{
      alert("Please Select valid type");
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
