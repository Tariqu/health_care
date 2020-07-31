import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacilityInfoComponent } from './facility-info/facility-info.component';


const routes: Routes = [
  { path: '', component: FacilityInfoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilityInfoRoutingModule { }
