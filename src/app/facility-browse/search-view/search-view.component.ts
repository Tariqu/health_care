import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-search-view",
  templateUrl: "./search-view.component.html",
  styleUrls: ["./search-view.component.scss"],
})
export class SearchViewComponent implements OnInit {
  searchInput: FormGroup;
  typeOfFacilities = [
    { label: "Long-term Care Hospital", value: "Long-term Care Hospital" },
    { label: "Hospice Facility", value: "Hospice Facility" },
    {
      label: "Inpatient Rehabilitation Facility",
      value: "Inpatient Rehabilitation Facility",
    },
  ];
  @Output() searchSubmit: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.searchInput = fb.group({
      facilityName: ["", [Validators.maxLength(20)]],
      zipCode: [
        "",
        [
          Validators.minLength(5),
          Validators.maxLength(5),
          Validators.pattern(/^[0-9]{5}$/),
        ],
      ],
      facility: [""],
    });
  }

  ngOnInit(): void {}

  submitSearchInput() {
    if (this.searchInput.valid) {
      this.searchSubmit.emit(this.searchInput.value);
    }
  }
}
