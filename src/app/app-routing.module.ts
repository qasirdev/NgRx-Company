import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';

const routes: Routes = [
  {path: 'welcome', component:WelcomeComponent},
  { path: 'companieslist', component: CompanyListComponent },
  // { path: 'company/:id', component: CompanyDetailComponent },
  { path: 'company/:id/edit', component: CompanyEditComponent },
  {path: '', redirectTo : 'welcome', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
