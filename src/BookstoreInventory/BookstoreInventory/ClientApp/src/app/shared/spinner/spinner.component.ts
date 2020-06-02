import { Component, OnInit, Input, Output, EventEmitter, Host } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector: 'spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss']
})

export class SpinnerComponent implements OnInit {
    @Input()
    isLoading: boolean;   

    ngOnInit() {        
        console.log("spinner:" + this.isLoading);
    }
}
