import {
  Component,
  OnInit,
  Input,
  ViewChild,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { FacilityShape } from "../models/facility-shape";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { MatSort } from "@angular/material/sort";

@Component({
  selector: "app-table-view",
  templateUrl: "./table-view.component.html",
  styleUrls: ["./table-view.component.scss"],
})
export class TableViewComponent implements OnInit, OnChanges {
  displayedColumns: string[] = [
    "facility_name",
    "type_of_facility",
    "city",
    "state",
    "total_number_of_beds",
    "zip_code",
  ];
  @Input() searchResults: FacilityShape[] = [];
  @Input() loading;
  dataSource: MatTableDataSource<FacilityShape>;
  // dataSource = new MatTableDataSource<FacilityResults>(this.searchResults);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.searchResults) {
      this.dataSource = new MatTableDataSource(
        changes.searchResults.currentValue
      );
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  navigateToDetails(row) {
    console.log("TableViewComponent -> navigateToDetails -> row", row);
    this.router.navigate([
      "/facility-info/" +
        row.type_of_facility +
        "/" +
        row.cms_certification_number_ccn,
    ]);
  }
}
