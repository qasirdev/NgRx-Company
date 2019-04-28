import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//third party libraries
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbModule
  ]
})
export class CoreModule { }
//Core: 
//providers for the singleton services
//Import CoreModule in the root AppModule only.
//Consider making CoreModule a pure services module with no declarations