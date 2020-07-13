import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "wec-validator",
  templateUrl: "./wec-validator.component.html",
  styleUrls: ["./wec-validator.component.css"]
})
export class WecValidatorComponent implements OnInit {

  @Input() control = null;
  @Input() name = null;
  @Input() min = null;
  @Input() max = null;

  constructor() { }

  ngOnInit() {
  }

}
