import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Appstate } from '../../core/store/appstate';
import { Store } from '@ngrx/store';

import { Router, ActivatedRoute } from '@angular/router';
import * as companyActions from '../company-store/company.actions';
import { CompanyService } from '../company.service';
import { Company } from 'src/app/models/company';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent implements OnInit {
  companyForm : FormGroup ;
  isNewCopany : boolean;
  companyId: any;

  company$ : Observable<Company>; 

  constructor(
    private store: Store<Appstate>,
    private router: Router,
    private activatedRoute : ActivatedRoute,
    private fb : FormBuilder,
    private companyService : CompanyService
  ) { }

  ngOnInit() {
    this.companyId = this.activatedRoute.snapshot.params['id'];
    this.isNewCopany = this.companyId === 'new';
    this.buildForm()

    if (!this.isNewCopany) {
      this.loadCompany();

      this.company$ = this.store.select(state => {
       return state.companies.companies[0]
      });

      this.company$.subscribe((company: Company) =>{
        this.companyForm.patchValue(company)
      });
    }
  }
  buildForm() {
    this.companyForm = this.fb.group({
      name: ['', Validators.required],
      email : [''],
      phone : ['']
    });
  }

  private loadCompany() {
    // this.companyService.loadCompany(this.companyId)
    //   .subscribe(company => {
    //     this.companyForm.patchValue(company)
    //   });
    
    this.store.dispatch(new companyActions.LoadCompanyAction(this.companyId));
  }

  private saveCompany(){
    if(this.isNewCopany){
      this.companyService.addCompany(this.companyForm.value)
        .subscribe(() => this.router.navigate([`/companieslist`]));
      
    }else{
      // this.companyForm.value['id'] = this.companyId;
      const companyToUpdate = {...this.companyForm.value, id: this.companyId};
      this.companyService.updateCompany(companyToUpdate)
        .subscribe(() => this.router.navigate([`/companieslist`]));
      
    }
  }
}
