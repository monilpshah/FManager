import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'income', loadChildren: './income/income.module#IncomePageModule' },
  { path: 'add-income-expense', loadChildren: './add-income-expense/add-income-expense.module#AddIncomeExpensePageModule' },
  { path: 'expense', loadChildren: './expense/expense.module#ExpensePageModule' },
  { path: 'note', loadChildren: './note/note.module#NotePageModule' },
  { path: 'edit-note', loadChildren: './edit-note/edit-note.module#EditNotePageModule' },
  { path: 'add-note', loadChildren: './add-note/add-note.module#AddNotePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
