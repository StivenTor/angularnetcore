import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-transaction-details-dialog",
  templateUrl: "./transaction-details-dialog.component.html",
  styleUrls: ["./transaction-details-dialog.component.scss"]
})
export class TransactionDetailsDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TransactionDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    if (data.idTransaccion) {
      data["opr_codeOperation"] = data.idTransaccion;
      data["opr_date"] = data.dateHour;
      data["opr_totalValue"] = data.total;
      data["opr_transactionIdProvider"] = data.idTransationProvider;
      data["opr_cellPhone"] = data.cellPhone;

    } else {
      data["opr_date"] = data.opr_strDate + " " + data.opr_hour;
    }

  }

  ngOnInit() {

  }

  onNoClick(): void {
    // this.dialogRef.close({"sasas": "fdsfsdf"});

    const innerContents = document.getElementById("invoice-info").innerHTML;
    const popupWinindow = window.open("", "_blank", "width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no");
    popupWinindow.document.open();
    popupWinindow.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" /></head><body onload="window.print()">' + innerContents + "</html>");
    popupWinindow.document.close();

    // const printContents = document.getElementById("invoice-info").innerHTML;
    // const popupWin = window.open("", "_blank", "width=300,height=300");
    // popupWin.document.open();
    // popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" /></head><body onload="window.print()">' + printContents + "</body></html>");
    // popupWin.document.close();

    // if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
    //   const popupWin = window.open("", "_blank", "width=600,height=600,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no");
    //   popupWin.window.focus();
    //   popupWin.document.write("<!DOCTYPE html><html><head>" +
    //     '<link rel="stylesheet" type="text/css" href="style.css" />' +
    //     '</head><body onload="window.print()"><div class="reward-body">' + printContents + "</div></body></html>");
    //   popupWin.onbeforeunload = function (event) {
    //     popupWin.close();
    //     return ".\n";
    //   };
    //   popupWin.onabort = function (event) {
    //     popupWin.document.close();
    //     popupWin.close();
    //   };
    // } else {
    //   const popupWin = window.open("", "_blank", "width=800,height=600");
    //   popupWin.document.open();
    //   popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" /></head><body onload="window.print()">' + printContents + "</body></html>");
    //   popupWin.document.close();
    // }
    // popupWin.document.close();

    // return true;

  }
}
