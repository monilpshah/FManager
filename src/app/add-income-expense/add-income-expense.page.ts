import { Component, OnInit } from '@angular/core';
import { expense } from '../Classes/expense';
import { ExpenseService } from '../Services/expense.service';
import { income } from '../Classes/income';
import { IncomeService } from '../Services/income.service';
import { UserService } from '../Services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-add-income-expense',
  templateUrl: './add-income-expense.page.html',
  styleUrls: ['./add-income-expense.page.scss'],
})
export class AddIncomeExpensePage implements OnInit {

  userid:number;
  email:string;
  type:string="";
  amount:number=null;
  comments:string="";
  constructor(public loadingController: LoadingController,private _income:IncomeService,private _expense:ExpenseService,private _user:UserService,private _acroute:ActivatedRoute,private _route:Router) { }

  ngOnInit() {
    this.presentLoadingWithOptions(1250);
    this.userid=Number(localStorage.getItem('userid'));    
    this.email=localStorage.getItem('email');
  }
  addRecord(){
    if(this.comments==""){
      alert("Please enter comments.");
    }
    else if(this.amount==null){
      alert("Please enter valid amount.");
    }
    else{
      if(this.type=="Income"){
        this._income.addIncome(new income(0,this.userid,this.amount,this.comments,"")).subscribe(
          (data:any)=>{
            alert("Income has been added.");
            this._route.navigate(['income']);
          }
        );
      }
      else if (this.type=="Expense"){
        this._expense.addExpense(new expense(0,this.userid,this.amount,this.comments,"")).subscribe(
          (data:any)=>{
            alert("Expense has been added.");
            this._route.navigate(['expense']);
          }
        );
      }
      else{
        alert("Please select valid type");
      }
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
