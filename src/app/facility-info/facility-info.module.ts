import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilityInfoRoutingModule } from './facility-info-routing.module';
import { FacilityInfoComponent } from './facility-info/facility-info.component';
import { FacilityCardComponent } from './facility-card/facility-card.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [FacilityInfoComponent, FacilityCardComponent],
  imports: [
    CommonModule,
    FacilityInfoRoutingModule,
    SharedModule
  ]
})
export class FacilityInfoModule { }
