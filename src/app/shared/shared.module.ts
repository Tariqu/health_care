import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSliderModule } from "@angular/material/slider";
import { MatCardModule } from "@angular/material/card";
import { BedsPipe } from "./beds.pipe";
import { BedsSignalDirective } from "./beds-signal.directive";
import { MatSortModule } from "@angular/material/sort";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatIconModule } from "@angular/material/icon";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [BedsPipe, BedsSignalDirective],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSliderModule,
    MatCardModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatIconModule,
  ],
  exports: [
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSliderModule,
    MatCardModule,
    BedsPipe,
    BedsSignalDirective,
    MatSortModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatIconModule,
  ],
})
export class SharedModule {}
