import { Component, OnInit } from '@angular/core';

import { Store } from "@ngrx/store";
import { Appstate } from 'src/app/core/store/appstate';

import { Observable } from 'rxjs';

import * as companyActions from '../company-store/company.actions'

import { Company } from '../../models/company';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  companies$ : Observable<Company[]>; 
  constructor(private store: Store<Appstate>) { }

  ngOnInit() {
    this.loadCompanies();
    this.companies$ = this.store.select(state => {
      return state.companies.companies
    });
  }

  loadCompanies(){
    this.store.dispatch(new companyActions.LoadCompaniesAction());
  }

  deleteCompany(companyId : number){
     console.log("You selected " + companyId +" compnay to delete");
    //this.store.dispatch(new companyActions.DeleteCompanyAction(companyId));
  }

}
