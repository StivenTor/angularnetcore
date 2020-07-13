import {
  Component,
  OnInit,
  ViewChild,
  Inject,
  AfterViewInit,
  ChangeDetectionStrategy,
  HostListener
} from "@angular/core";
import { LoadingService } from "./services/infrastructure/loading.service";
import { ContextService } from "./services/infrastructure/context.service";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSidenav } from "@angular/material";
import { Router } from "@angular/router";
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/pt';


registerLocaleData(localeFr, 'pt');

@Component({
  // changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild("sidenav") sidenav: MatSidenav;

  title = "PruebaNetCore";

  navMode = "side";

  navOpened = true;

  message;

  constructor(
    private router: Router,
    private dialog: MatDialog    
  ) {}

  ngOnInit() {
    LoadingService.isLoading = false;
    this.checkPageWidth();
  }

  ngAfterViewInit() {
  }

  public isLoading() {
    return LoadingService.isLoading;
  }

  public menuOpenedOnInit() {
    // console.log("menuOpenedOnInit");
    return false;
  }

  public checkPageWidth() {
    if (window.innerWidth < 600) {
      this.navMode = "over";
      this.navOpened = false;
    } else {
      this.navMode = "side";
      this.navOpened = true;
    }
  }


  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.checkPageWidth();
  }
}
