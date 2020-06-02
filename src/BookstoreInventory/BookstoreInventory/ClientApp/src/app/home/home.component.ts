import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

// models
import { IBookStore } from '../models/IBookStore';
import { IStoreDetails } from '../models/IStoreDetails';

// services
import { StoreService } from '../services/store.service';

@Component({  
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {

  listBookStores: IBookStore[] = [];
  listStoreDetails: IStoreDetails[] = [];
  selectedStoreFromTable: IBookStore;

  isLoading: boolean = false;    

  constructor(private _storeService: StoreService) {

  }

  ngOnInit(): void {

    this._storeService.getAllStores("").subscribe((stores: IBookStore[]) => {
      this.listBookStores = stores;
    },
      (err: HttpErrorResponse) => {
        this.handleError(err);
      }
    );

  }

  onBookstoreTableRowSelect(): void {
    console.log(this.selectedStoreFromTable.storeName);

    // call service
    this._storeService.getStoreDetails(this.selectedStoreFromTable.storeId).subscribe((storedetails: IStoreDetails[]) => {
      this.listStoreDetails = storedetails;
    },
      (err: HttpErrorResponse) => {
        this.handleError(err);
      }
    );
  }

  handleBookOrderButtonClick(rowData: IStoreDetails, rowIndex: number): void {
    console.log("btn click");
    this.isLoading = true;

    //setTimeout(function () { }, 5000);
    //this.isLoading = false;

  }

  eventHandlerDateChange(value): void {
    console.log("event handler- date:" + value.date);

  }

  handleError(error: any) {
    console.log(error);
  }
}
