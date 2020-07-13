import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-transaction-details-dialog-rejected",
  templateUrl: "./transaction-details-dialog-rejected.component.html",
  styleUrls: ["./transaction-details-dialog-rejected.component.scss"]
})
export class TransactionDetailsDialogRejectedComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TransactionDetailsDialogRejectedComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    console.log(data);

    if (data.idTransaccion) {
      data["idTransaccion"] = data.idTransaccion;
      data["hora"] = data.hora;
      data["fechaStr"] = data.fechaStr;
      data["celular"] = data.celular;
      data["valor"] = data.valor;
      data["celular"] = data.celular;
      data["codeOperationProvider"] = data.idTransaccionProveedor;
      data["requestProviderExit"] = data.repuestaProveedor;
    } else {
      data["fechaStr"] = data.fechaStr;
      data["hora"] = data.hora;
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
