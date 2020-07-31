import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FacilityInfoService } from "../facility-info.service";

@Component({
  selector: "app-facility-info",
  templateUrl: "./facility-info.component.html",
  styleUrls: ["./facility-info.component.scss"],
})
export class FacilityInfoComponent implements OnInit {
  facilityDetails;

  constructor(
    private activatedRoute: ActivatedRoute,
    private facilityInfo: FacilityInfoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      console.log("FacilityInfoComponent -> ngOnInit -> data", data);
      this.facilityInfo
        .getFacilityDetails(data.type, data.cms_certification_number_ccn)
        .subscribe((result) => {
          console.log("FacilityInfoComponent -> ngOnInit -> result", result);
          this.facilityDetails = { ...result[0], facility_name: data.type };
        });
    });
  }

  goPreviousPage() {
    this.router.navigate(["../"]);
  }
}
