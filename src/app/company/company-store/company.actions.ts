import { Action } from "@ngrx/store";
import { Company } from '../../models/company';

export const enum companyActionsTypes{
    LOAD_COMPANIES = 'LOAD_COMPANIES',
    LOAD_COMPANIES_SUCCESS = 'LOAD_COMPANIES_SUCCESS',
    LOAD_COMPANY = 'LOAD_COMPANY',
    LOAD_COMPANY_SUCCESS = 'LOAD_COMPANY_SUCCESS',
    DELETE_COMPANY = 'DELETE_COMPANY',
    DELETE_COMPANY_SUCCESS = 'DELETE_COMPANY_SUCCESS',
}

export class LoadCompaniesAction implements Action {
    readonly type = companyActionsTypes.LOAD_COMPANIES ;
    constructor(){}
}

export class LoadCompaniesSuccessAction  implements Action {
    readonly type = companyActionsTypes.LOAD_COMPANIES_SUCCESS
    constructor(public payload:Company[]) { }
}

export class LoadCompanyAction implements Action {
    readonly type = companyActionsTypes.LOAD_COMPANY;
    constructor(public payload : number) { }
}

export class LoadCompanySuccessAction implements Action {
    readonly type = companyActionsTypes.LOAD_COMPANY_SUCCESS;
    constructor(public payload : Company) { }
}

export class DeleteCompanyAction implements Action {
    readonly type = companyActionsTypes.DELETE_COMPANY;
    constructor(public payload: number) {  
    }
}

export class DeleteCompanySuccessAction implements Action {
    readonly type = companyActionsTypes.DELETE_COMPANY_SUCCESS;
    constructor(public payload: number) {  
    }
}

export type companyActions = 
  LoadCompaniesAction
| LoadCompaniesSuccessAction
| LoadCompanyAction
| LoadCompanySuccessAction
| DeleteCompanyAction
| DeleteCompanySuccessAction