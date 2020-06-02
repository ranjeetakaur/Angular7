import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, tap, catchError, } from 'rxjs/operators';
import { environment } from '../../environments/environment';

//import { WINDOW } from '../utility/window.provider';

import { IBookStore } from '../models/IBookStore';
import { IStoreDetails } from '../models/IStoreDetails';


@Injectable()
export class StoreService {
  public _baseUrl: string;
  _endpoint: string;

  constructor(private http: HttpClient
    ) {
    this._baseUrl = environment.baseUrl;
  }

  //service
  getAllStores(params: string): Observable<IBookStore[]> {
    this._endpoint = this._baseUrl + "api/AppData/GetAllBookStores";

    return this.http.post<IBookStore[]>(this._endpoint, params)
      .pipe(catchError(err => this.handleError(err)));
  }

  //service
  getStoreDetails(id: number): Observable<IStoreDetails[]> {
    this._endpoint = this._baseUrl + "api/AppData/GetDetailsBookStore";
    var params = { "StoreId": id };
    return this.http.post<IStoreDetails[]>(this._endpoint, params)
      .pipe(catchError(err => this.handleError(err)));
  }

  handleError(error: HttpErrorResponse): Observable<any> {
    console.log();
    return throwError(error.error);
  }
  

  
}
