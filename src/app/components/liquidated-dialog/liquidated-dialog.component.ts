import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-liquidated-dialog",
  templateUrl: "./liquidated-dialog.component.html",
  styleUrls: ["./liquidated-dialog.component.scss"]
})
export class LiquidatedDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<LiquidatedDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log("Sale esto 0 ");

    if (data.lqd_code) {
      data["lqd_codeTypeDocumentCollector"] = data.lqd_codeTypeDocumentCollector;
      let documentCollectorLiq = data.lqd_documentUserCollector.slice(0, -3);
      console.log("Sale esto 1 " + documentCollectorLiq);
      data["lqd_documentUserCollector"] = documentCollectorLiq + "XXX";
      data["lqd_nameUserCollector"] = data.lqd_nameUserCollector;
      data["lqd_strDate"] = data.lqd_strDate;
      data["lqd_hour"] = data.lqd_hour;
      data["lqd_value"] = data.lqd_value;
      data["lqd_percetageParticipation"] = data.lqd_percetageParticipation;
      data["lqd_valueParticipation"] = data.lqd_valueParticipation;
      data["lqd_code"] = data.lqd_code;
      data["lqd_codeTypeDocument"] = data.lqd_codeTypeDocument;
      let documentLiq = data.lqd_documentUser.slice(0, -3);
      console.log("Sale esto " + documentLiq);
      data["lqd_documentUser"] = documentLiq + "XXX";
      data["lqd_nameUser"] = data.lqd_nameUser;
    } else {
      
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
