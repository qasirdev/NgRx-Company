import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { CompanyTableComponent } from './company-table/company-table.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [CompanyListComponent, CompanyEditComponent, CompanyTableComponent],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ]
})
export class CompanyModule { }
