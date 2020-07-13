import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-resume-personalized-payment-dialog",
  templateUrl: "./resume-personalized-payment-dialog.component.html",
  styleUrls: ["./resume-personalized-payment-dialog.component.scss"]
})
export class ResumePersonalizedPaymentDialgoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ResumePersonalizedPaymentDialgoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    if (data.reference) {
      data["valueConsignement"] = data.valueConsignement;
      data["valueCash"] = data.valueCash;
      data["valueCredit"] = data.valueCredit;
      data["fechaStr"] = data.fechaStr;
      data["reference"] = data.reference;
    } else {
      data["fechaStr"] = data.fechaStr;
    }  
  }

  ngOnInit() {

  }
}
