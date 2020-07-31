import { Component, OnInit } from "@angular/core";
import { FacilityViewService } from "../facility-browse.service";
import { SearchCriteria } from "../models/search-criteria";
import { forkJoin } from "rxjs";
import { FacilityShape } from "../models/facility-shape";
import { SharedService } from "src/app/shared/shared.service";

@Component({
  selector: "app-facility-view",
  templateUrl: "./facility-view.component.html",
  styleUrls: ["./facility-view.component.scss"],
})
export class FacilityViewComponent implements OnInit {
  searchValues;
  searchResults: FacilityShape[];
  searchCriteria;
  zipCodesByDistance;
  loading: Boolean;

  constructor(
    private facilityService: FacilityViewService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {}

  getSearchResults(searchCriteria: SearchCriteria) {
    this.getFacilityData({
      ...searchCriteria,
      zipCode: searchCriteria.zipCode ? [searchCriteria.zipCode] : null,
    });
  }

  getFacilityData(searchCriteria) {
    this.loading = true;
    if (this.searchCriteria?.facility) {
      if (this.searchCriteria.facility.value === "Long-term Care Hospital") {
        this.facilityService.getLongTermCareResults(searchCriteria).subscribe(
          (result: FacilityShape[]) => {
            this.loading = false;
            this.searchResults = result
              .sort((a, b) => {
                if (a.facility_name < b.facility_name) {
                  return -1;
                }
                if (a.facility_name > b.facility_name) {
                  return 1;
                }
                return 0;
              })
              .filter((row) => row.total_number_of_beds !== "0");
          },
          (err) => {
            this.loading = false;
            this.sharedService.openSnackBar(err.message);
          }
        );
      } else if (this.searchCriteria.facility.value === "Hospice Facility") {
        this.facilityService
          .getHospiceFacilitiesResults(searchCriteria)
          .subscribe(
            (result: FacilityShape[]) => {
              this.loading = false;
              this.searchResults = result
                .sort((a, b) => {
                  if (a.facility_name < b.facility_name) {
                    return -1;
                  }
                  if (a.facility_name > b.facility_name) {
                    return 1;
                  }
                  return 0;
                })
                .filter((row) => row.total_number_of_beds !== "0");
            },
            (err) => {
              this.loading = false;
              this.sharedService.openSnackBar(err.message);
            }
          );
      } else if (
        this.searchCriteria.facility.value ===
        "Inpatient Rehabilitation Facility"
      ) {
        this.facilityService.getInPatientRehabResults(searchCriteria).subscribe(
          (result: FacilityShape[]) => {
            this.loading = false;
            this.searchResults = result
              .sort((a, b) => {
                if (a.facility_name < b.facility_name) {
                  return -1;
                }
                if (a.facility_name > b.facility_name) {
                  return 1;
                }
                return 0;
              })
              .filter((row) => row.total_number_of_beds !== "0");
          },
          (err) => {
            this.loading = false;
            this.sharedService.openSnackBar(err.message);
          }
        );
      }
    } else {
      forkJoin([
        this.facilityService.getLongTermCareResults(searchCriteria),
        this.facilityService.getHospiceFacilitiesResults(searchCriteria),
        this.facilityService.getInPatientRehabResults(searchCriteria),
      ]).subscribe(
        (result) => {
          this.loading = false;
          this.searchResults = [...result[0], ...result[1], ...result[2]].sort(
            (a, b) => {
              if (a.facility_name < b.facility_name) {
                return -1;
              }
              if (a.facility_name > b.facility_name) {
                return 1;
              }
              return 0;
            }
          );
        },
        (err) => {
          this.loading = false;
          this.sharedService.openSnackBar(err.message);
        }
      );
    }
  }
}
