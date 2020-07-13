import { Component, OnInit } from "@angular/core";
import { AlertService } from "../../services/infrastructure/alert.service";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Router } from "@angular/router";

// declare var M :any;

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  date: Date;
  dateFormat: string;
  constructor(
    private alertService: AlertService,
    private dialog: MatDialog,
    private router: Router
  ) {
  
  }

  ngOnInit() {
    // this.user.initComponents();
    setInterval(() => this.getDate(), 1000);
    // getDate();
  }

  getDate() {
    this.date.setSeconds(this.date.getSeconds() + 1);
    let hours = this.date.getHours();
    const minutes = this.date.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    this.dateFormat = `${this.date.getUTCDay()}/${this.date.getMonth()}/${this.date.getFullYear()} ${hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${this.date.getUTCSeconds()}${ampm}`;
  }
}
