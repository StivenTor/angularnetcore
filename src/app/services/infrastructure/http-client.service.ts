import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { LoadingService } from "./loading.service";
import { RequestOptions } from "@angular/http";

@Injectable()
export class HttpClientService {

  groupKey = "mapfre";
  ttl: number = 60 * 60;
  delayType = "all";
  // send new request to server everytime, if it's set to none it will send new request only when entry is expired

  constructor(
    public httpClient: HttpClient,
    // private cache: CacheService
  ) { }

  public get(url: string, cached: boolean, loading = true) {

    return Observable.create(observer => {

      const cacheKey = url;
      const request = this.httpClient.get(url);


      if (loading) {
        LoadingService.isLoading = true;
      }

      request.subscribe(
        data => {

          if (loading) {
            LoadingService.isLoading = false;
          }

          observer.next({ status: true, data: data });
          observer.complete();
        },
        err => {

          if (loading) {
            LoadingService.isLoading = false;
          }

          observer.next({ status: false, data: err });
          observer.complete();
        },
        () => { }
      );

    });
  }

  public post(url: string, body: any, cached: boolean) {
    return Observable.create(observer => {

      const cacheKey = url;
      const request = this.httpClient.post(url, body);


      LoadingService.isLoading = true;

      request.subscribe(
        (data: any) => {

          LoadingService.isLoading = false;
          // data["message"] = "";
          if (data.message && data.message !== "") {
            const messageArray = data.message.split("|");
            data["message"] = messageArray.length > 2 ? messageArray[2] : data.message;
          }

          observer.next({ status: true, data: data });
          observer.complete();
        },
        (err: any) => {

          LoadingService.isLoading = false;

          observer.next({ status: false, data: err });
          observer.complete();
        },
        () => { }
      );

    });
  }

  public fileUpload(url: string, parameter, file: File) {



    return Observable.create(observer => {

      const httpOptions = {
        headers: new HttpHeaders({
          "Accept": "application/json"
        })
      };

      const formData: FormData = new FormData();
      formData.append(parameter, file, file.name);

      const request = this.httpClient.post(url, formData, httpOptions);

      LoadingService.isLoading = true;

      request.subscribe(
        (data: any) => {

          LoadingService.isLoading = false;
          if (data.message && data.message !== "") {
            const messageArray = data.message.split("|");
            data["message"] = messageArray.length > 2 ? messageArray[2] : data.message;
          }

          observer.next({ status: true, data: data });
          observer.complete();
        },
        (err: any) => {
          LoadingService.isLoading = false;

          console.log(err);


          observer.next({ status: false, data: err.error.error });
          observer.complete();
        },
        () => { }
      );

    });

  }

}