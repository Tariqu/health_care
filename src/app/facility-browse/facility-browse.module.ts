import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FacilityViewRoutingModule } from "./facility-browse-routing.module";
import { FacilityViewComponent } from "./facility-view/facility-view.component";
import { SharedModule } from "../shared/shared.module";
import { SearchViewComponent } from "./search-view/search-view.component";
import { ReactiveFormsModule } from "@angular/forms";
import { TableViewComponent } from "./table-view/table-view.component";
import { SharedService } from "../shared/shared.service";

@NgModule({
  declarations: [
    FacilityViewComponent,
    SearchViewComponent,
    TableViewComponent,
  ],
  imports: [
    CommonModule,
    FacilityViewRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  providers: [SharedService],
})
export class FacilityBrowseModule {}
