import { Injectable } from '@angular/core';

import {  } from "rxjs/observable";
import { switchMap, map } from "rxjs/operators";
import { CompanyService } from '../company.service';
import {  } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as companyActions from '../company-store/company.actions';
import { Company } from 'src/app/models/company';

@Injectable()
export class CompanyEffects {

    constructor(
        private action$ : Actions,
        private companyService: CompanyService
    ) { }

   @Effect() loadCompanies$ = this.action$
   .pipe(
       ofType (companyActions.companyActionsTypes.LOAD_COMPANIES),
       switchMap(()=>{
        return this.companyService.loadCompanies()
        .pipe(
            map((companies:Company[])=> new companyActions.LoadCompaniesSuccessAction(companies))
        );
       })
   );

   @Effect() loadCompany$ = this.action$
   .pipe(
       ofType(companyActions.companyActionsTypes.LOAD_COMPANY),
       switchMap( (action: companyActions.LoadCompanyAction)=>{
        return this.companyService.loadCompany(action.payload)
        .pipe(
            map((comapny: Company)=> new companyActions.LoadCompanySuccessAction(comapny))
        )
       })
   )
   
   @Effect() deleteCompany$ = this.action$
       .pipe(
        ofType( companyActions.companyActionsTypes.DELETE_COMPANY),
        switchMap((action: companyActions.DeleteCompanyAction) =>{
            return this.companyService.deleteCompany(action.payload)
            .pipe(
                map((company:Company)=> new companyActions.DeleteCompanySuccessAction(company.id))
            )
        })

       )
}