import { HttpModule } from "@angular/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { MaterialModule } from "./material.module";
import {
  MatProgressBarModule,
  MatPaginatorIntl,
  MatAutocompleteModule,
  MatButtonToggleModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MAT_DATE_LOCALE} from "@angular/material";
import { MatListModule} from "@angular/material/list";
import { MatCardModule } from "@angular/material";
import { TreeModule } from "angular-tree-component";
import { CurrencyMaskModule } from "ng2-currency-mask";
import { LightboxModule } from "ngx-lightbox";
import {NgxPrintModule} from "ngx-print";

import { CommonModule, DatePipe, CurrencyPipe } from "@angular/common";

import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HeaderComponent } from "./components/header/header.component";
import { MenuComponent } from "./components/menu/menu.component";
import { WecInputComponent } from "./components/forms/wec-input/wec-input.component";
import { WecValidatorComponent } from "./components/forms/wec-validator/wec-validator.component";
import { WecSelectComponent } from "./components/forms/wec-select/wec-select.component";

import { ClickOutsideDirective } from "./click-outside.directive";
import { KeysPipe } from "./pipes/keys.pipe";
import { SafeHtmlPipe } from "./pipes/safehtml.pipe";

import { RecaptchaModule, RecaptchaSettings, RECAPTCHA_SETTINGS, RECAPTCHA_LANGUAGE } from "ng-recaptcha";
import { RecaptchaFormsModule } from "ng-recaptcha/forms";
import { environment } from "../environments/environment";
import { getSpanishPaginatorIntl } from "./spanish-paginator-intl";


import { HttpClientService } from "./services/infrastructure/http-client.service";
import { AlertService } from "./services/infrastructure/alert.service";
import { FormValidatorService } from "./services/infrastructure/form-validator.service";

import { PersonComponent } from "./pages/person/person.component";
import { PersonService } from "./services/person.service";
import { PersonRemoteService } from "./services/remote/person-remote.service";

import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';

import { AsyncPipe } from '../../node_modules/@angular/common';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { ExcelService } from "./services/infrastructure/excel.service";
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { NgImageSliderModule } from 'ng-image-slider';
import { EditorModule } from 'primeng/editor';
import { ChartModule } from 'primeng/chart';

const rootRouting = RouterModule.forRoot(
  [{
    path: "",
    component: PersonComponent
  }], { useHash: true});


@NgModule({
  declarations: [
    AppComponent,

    WecSelectComponent,
    WecInputComponent,
    WecValidatorComponent,
    ClickOutsideDirective,
    ClickOutsideDirective,
    KeysPipe,
    SafeHtmlPipe,
    HeaderComponent,
    MenuComponent,
    PersonComponent
  ],
  entryComponents: [

  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    rootRouting,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    MatProgressBarModule,
    MatListModule,
    MatCardModule,
    TreeModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CurrencyMaskModule,
    LightboxModule,
    NgxPrintModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    NgxMatSelectSearchModule,
    NgxQRCodeModule,
    NgImageSliderModule,
    EditorModule,
    ChartModule
  ],
  providers: [
    HttpClientService,
    AlertService,
    FormValidatorService,
    ExcelService,
    PersonRemoteService,
    PersonService,
    AsyncPipe,
    {
      provide: MatPaginatorIntl,
      useValue: getSpanishPaginatorIntl()
    },
    {
      provide: MAT_DATE_LOCALE,
      useValue: "es-ES"
    },
    {
      provide: RECAPTCHA_LANGUAGE,
      useValue: "es"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
