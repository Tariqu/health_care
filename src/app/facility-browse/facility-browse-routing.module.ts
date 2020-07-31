import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacilityViewComponent } from './facility-view/facility-view.component';


const routes: Routes = [
  { path: '', component: FacilityViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilityViewRoutingModule { }
