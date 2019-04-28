import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//third party libraries
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from "@ngrx/effects";
import { CompanyReducer } from '../app/company/company-store/company.reducer';
import { CompanyEffects } from '../app/company/company-store/company.effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { CoreModule } from './core/core.module';
import { CompanyModule } from './company/company.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    CompanyModule,
    HttpClientModule,
    StoreModule.forRoot({companies: CompanyReducer}),
    EffectsModule.forRoot([CompanyEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
      features: {
        pause: false,
        lock: true,
        persist: true
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
