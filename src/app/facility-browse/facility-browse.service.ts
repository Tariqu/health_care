import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { FacilityShape } from "./models/facility-shape";
import { environment } from "../../environments/environment";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class FacilityViewService {
  private longTermHospitalUrl = environment.baseUrl + "azum-44iv.json";
  private hospiceFacilitiesUrl = environment.baseUrl + "yc9t-dgbk.json";
  private InpatientRehabilitationUrl = environment.baseUrl + "7t8x-u3ir.json";
  private zipCodeUrl = environment.zipCodeApi + "radius.json";

  constructor(private http: HttpClient) {}

  getLongTermCareResults(searchCriteria): Observable<FacilityShape[]> {
    let params = {};
    if (searchCriteria.facilityName && searchCriteria.zipCode) {
      params["$where"] = `facility_name like '%${
        searchCriteria.facilityName
      }%' and zip_code in (${searchCriteria.zipCode
        .map((zip) => `'${zip}'`)
        .join(",")})`;
    } else if (searchCriteria.facilityName && !searchCriteria.zipCode) {
      params[
        "$where"
      ] = `facility_name like '%${searchCriteria.facilityName}%'`;
    } else if (!searchCriteria.facilityName && searchCriteria.zipCode) {
      params["$where"] = `zip_code in (${searchCriteria.zipCode
        .map((zip) => `'${zip}'`)
        .join(",")})`;
    } else {
      params = {};
    }
    return this.http
      .get<FacilityShape[]>(this.longTermHospitalUrl, {
        params,
      })
      .pipe(
        map((result: any[]): FacilityShape[] =>
          result.map((data) => ({
            facility_name: data.facility_name,
            type_of_facility: "Long-term Care Hospital",
            city: data.city,
            state: data.state,
            total_number_of_beds:
              data.cms_certification_number_ccn[
                data.cms_certification_number_ccn.length - 1
              ],
            zip_code: data.zip_code,
            cms_certification_number_ccn: data.cms_certification_number_ccn,
          }))
        )
      );
  }

  getHospiceFacilitiesResults(searchCriteria): Observable<FacilityShape[]> {
    let params = {};
    if (searchCriteria.facilityName && searchCriteria.zipCode) {
      params["$where"] = `provider_name like '%${
        searchCriteria.facilityName
      }%' and zip_code in (${searchCriteria.zipCode
        .map((zip) => `'${zip}'`)
        .join(",")})`;
    } else if (searchCriteria.facilityName && !searchCriteria.zipCode) {
      params[
        "$where"
      ] = `provider_name like '%${searchCriteria.facilityName}%'`;
    } else if (!searchCriteria.facilityName && searchCriteria.zipCode) {
      params["$where"] = `zip_code in (${searchCriteria.zipCode
        .map((zip) => `'${zip}'`)
        .join(",")})`;
    } else {
      params = {};
    }
    return this.http
      .get<FacilityShape[]>(this.hospiceFacilitiesUrl, {
        params,
      })
      .pipe(
        map((result: any[]): FacilityShape[] =>
          result.map((data) => ({
            facility_name: data.provider_name,
            type_of_facility: "Hospice Facilities",
            city: data.city,
            state: data.state,
            total_number_of_beds:
              data.cms_certification_number_ccn[
                data.cms_certification_number_ccn.length - 1
              ],
            zip_code: data.zip_code,
            cms_certification_number_ccn: data.cms_certification_number_ccn,
          }))
        )
      );
  }

  getInPatientRehabResults(searchCriteria): Observable<FacilityShape[]> {
    let params = {};
    if (searchCriteria.facilityName && searchCriteria.zipCode) {
      params["$where"] = `facility_name like '%${
        searchCriteria.facilityName
      }%' and zip_code in (${searchCriteria.zipCode
        .map((zip) => `'${zip}'`)
        .join(",")})`;
    } else if (searchCriteria.facilityName && !searchCriteria.zipCode) {
      params[
        "$where"
      ] = `facility_name like '%${searchCriteria.facilityName}%'`;
    } else if (!searchCriteria.facilityName && searchCriteria.zipCode) {
      params["$where"] = `zip_code in (${searchCriteria.zipCode
        .map((zip) => `'${zip}'`)
        .join(",")})`;
    } else {
      params = {};
    }
    return this.http
      .get<FacilityShape[]>(this.InpatientRehabilitationUrl, {
        params,
      })
      .pipe(
        map((result: any[]): FacilityShape[] =>
          result.map((data) => ({
            facility_name: data.facility_name,
            type_of_facility: "Inpatient Rehabilitation Facilities",
            city: data.city,
            state: data.state,
            total_number_of_beds:
              data.cms_certification_number_ccn[
                data.cms_certification_number_ccn.length - 1
              ],
            zip_code: data.zip_code,
            cms_certification_number_ccn: data.cms_certification_number_ccn,
          }))
        )
      );
  }

  getZipCode(distance, zipCode) {
    return this.http.get(
      `${this.zipCodeUrl}/${zipCode}/${distance}/mile`
    ) as Observable<any>;
  }
}
