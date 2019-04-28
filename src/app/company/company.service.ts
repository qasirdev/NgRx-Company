import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { map, catchError, tap } from "rxjs/operators";
import { Company } from '../models/company';
import { throwError, Observable, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
    
  API_BASE = 'https://firebootcamp-crm-api.azurewebsites.net/api';
  constructor(private http: HttpClient) { }

  loadCompanies(){
    return this.http.get(`${this.API_BASE}/company`)
    .pipe(
      map((data: Company[])=> data),
      catchError(this.handleError)
    )
   }
   loadCompany(companyId: any) {
    return this.http.get(`${this.API_BASE}/company/${companyId}`)
  }  
  updateCompany(company: Company) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        })
      };

    return this.http.put(`${this.API_BASE}/company/${company.id}`, JSON.stringify(company), httpOptions)
    .pipe(
      map(response => response),
      // tap(response =>  console.log(response)),
      catchError(this.handleError)       
    );
  }
  addCompany(company: Company) : Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        })
      };

    return this.http.post(`${this.API_BASE}/company`,JSON.stringify(company), httpOptions)
    .pipe(
      map(response => response),
      catchError(this.handleError)       
    );
  }
  deleteCompany(companyId: number): Observable<any> {
    return this.http.delete(`${this.API_BASE}/company/${companyId}`)
    .pipe(
      // tap((company: any) => {console.log(JSON.stringify(company))}),
      map((response : Response)=> response)
    );
  }
  handleError(error: any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){ 
      //client side error
      errorMessage = 'Error : ${error.error.message}';
    }
    else{ 
      //server side error
      errorMessage = 'Error code : ${error.status} \n Message : ${error.message}';
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
