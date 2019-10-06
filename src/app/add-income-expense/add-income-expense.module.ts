import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddIncomeExpensePage } from './add-income-expense.page';

const routes: Routes = [
  {
    path: '',
    component: AddIncomeExpensePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddIncomeExpensePage]
})
export class AddIncomeExpensePageModule {}
