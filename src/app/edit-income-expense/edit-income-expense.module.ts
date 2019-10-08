import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditIncomeExpensePage } from './edit-income-expense.page';

const routes: Routes = [
  {
    path: '',
    component: EditIncomeExpensePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditIncomeExpensePage]
})
export class EditIncomeExpensePageModule {}
