
import * as companyActions from '../company-store/company.actions';
import { CompanyReducer } from './company.reducer';
describe('CompanyReducer',()=>{
    describe('deleteCompanyAction',()=>{
        //F is used in "fit" to focus/ run only one test
        fit(`should delete a company`, () => {
            const currentState = {
                companies: [
                    { id: 1, name: 'SSW', email: 'email', phone: 123 },
                    { id: 2, name: 'Microsoft' , email: 'email', phone: 123 },
                ]
            };

            const expectedResult = {
                companies: [{ id: 2, name: 'Microsoft', email: 'email', phone: 123 }]
            };

            const action = new companyActions.DeleteCompanySuccessAction(1);
            const result = CompanyReducer(currentState, action);


            expect(result).toEqual(expectedResult); 
        });    
    });
});