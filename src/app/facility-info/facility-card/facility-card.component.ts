import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-facility-card",
  templateUrl: "./facility-card.component.html",
  styleUrls: ["./facility-card.component.scss"],
})
export class FacilityCardComponent implements OnInit {
  @Input() label;
  @Input() value;

  constructor() {}

  ngOnInit(): void {}
}
