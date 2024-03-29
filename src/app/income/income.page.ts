import { Component, OnInit } from '@angular/core';
import { income } from '../Classes/income';
import { IncomeService } from '../Services/income.service';
import { UserService } from '../Services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-income',
  templateUrl: './income.page.html',
  styleUrls: ['./income.page.scss'],
})
export class IncomePage implements OnInit {

  constructor(public loadingController: LoadingController,private _income:IncomeService,private _user:UserService,private _acroute:ActivatedRoute,private _route:Router) { }
  userid:number;
  email:string;
  income:income[];
  grandtotal:number=0;
  i:number=0;
  ngOnInit() {
    this.presentLoadingWithOptions(1250);
    this.userid=Number(localStorage.getItem('userid'));    
    this.email=localStorage.getItem('email');
    this.grandtotal=0;
   this._income.getIncomeByFkuserid(this.userid).subscribe(
     (data:income[])=>{
      this.income=data;
      for(this.i=0;this.i<this.income.length;this.i++){
          this.grandtotal=this.grandtotal+this.income[this.i].amount;
      }           
     }
   );     
  }
  editIncome(iid){
    this._route.navigate(['edit-income-expense',iid,"Income"]);
  }
  deleteIncome(iid){
    this._income.deleteIncome(iid).subscribe(
      (data:any)=>{
        alert("Income has been deleted.");
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
  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
    }, 2000);
    this.ngOnInit();
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
