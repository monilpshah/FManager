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
  { path: 'edit-note/:nid', loadChildren: './edit-note/edit-note.module#EditNotePageModule' },
  { path: 'add-note', loadChildren: './add-note/add-note.module#AddNotePageModule' },
  { path: 'edit-income-expense/:ieid/:type', loadChildren: './edit-income-expense/edit-income-expense.module#EditIncomeExpensePageModule' },
  { path: 'logout', loadChildren: './logout/logout.module#LogoutPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'forgot-password', loadChildren: './forgot-password/forgot-password.module#ForgotPasswordPageModule' },
  { path: 'edit-profile', loadChildren: './edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'homepage', loadChildren: './homepage/homepage.module#HomepagePageModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
