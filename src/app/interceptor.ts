import { Injectable, Inject } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { DOCUMENT } from "@angular/common";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";

@Injectable()
export class HttpServiceInterceptor{

}
