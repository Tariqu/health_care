import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FacilityInfoService {
  private facilityDetailsUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getFacilityDetails(type, id) {
    if (type === "Long-term Care Hospital") {
      return this.http.get(
        `${this.facilityDetailsUrl}/azum-44iv.json?cms_certification_number_ccn=${id}`
      );
    } else if (type === "Hospice Facilities") {
      return this.http.get(
        `${this.facilityDetailsUrl}/yc9t-dgbk.json?cms_certification_number_ccn=${id}`
      );
    } else if (type === "Inpatient Rehabilitation Facilities") {
      return this.http.get(
        `${this.facilityDetailsUrl}/7t8x-u3ir.json?cms_certification_number_ccn=${id}`
      );
    }
    return of();
  }
}
