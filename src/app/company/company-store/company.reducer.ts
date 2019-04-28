import { companyActions, companyActionsTypes } from "./company.actions";
import { Company } from 'src/app/models/company';

export interface State{
    companies: Company[];
}

const initialState : State = {
    companies : []
}

export function CompanyReducer(state = initialState,action: companyActions) {
    switch (action.type) {
        case companyActionsTypes.LOAD_COMPANIES_SUCCESS :{
            return state = {
                companies : action.payload
            } 
         }
         case companyActionsTypes.LOAD_COMPANY_SUCCESS : {
             return state = {
                 companies : state.companies.filter(company=> company.id === action.payload.id)
             }
         }
         case companyActionsTypes.DELETE_COMPANY_SUCCESS:{
             return state = {
                 companies: state.companies.filter(company => company.id != action.payload)
             }
         }
        default:
            return state;
    }
}