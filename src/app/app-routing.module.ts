import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./facility-browse/facility-browse.module").then(
        (module) => module.FacilityBrowseModule
      ),
  },
  {
    path: "facility-info/:type/:cms_certification_number_ccn",
    loadChildren: () =>
      import("./facility-info/facility-info.module").then(
        (module) => module.FacilityInfoModule
      ),
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
