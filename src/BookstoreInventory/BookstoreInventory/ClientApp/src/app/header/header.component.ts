import { Component, OnInit, OnChanges, Input } from '@angular/core';
import * as moment from 'moment';
//import { AlertService } from '../services/alert.service';


@Component({
    selector: 'page-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

    constructor() {        
        
    }

    lastRefreshedTime = moment().format('MM/DD/YY HH:mm');    
    pageHeaderTitle: string;
    firstname: string;
    lastname: string;
    
    ngOnInit(): void{
          
      this.pageHeaderTitle = "Books Order";
      this.firstname = "Shane";
      this.lastname = "Wills";
  
    }

    buttonRefreshHandler(): void{
        // update time
        this.lastRefreshedTime = moment().format('MM/DD/YY HH:mm')        
    }
}

