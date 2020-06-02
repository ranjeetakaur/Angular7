import { Component, OnInit, Input, Output, EventEmitter, Host } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'input-panel',
  templateUrl: './inputpanel.component.html',
  styleUrls: ['./inputpanel.component.scss']
})

export class InputpanelComponent implements OnInit {

  scheduledDate: Date = new Date();

  @Output()
  outputCalenderDateChanged = new EventEmitter<any>();


  ngOnInit() {
    
  }

  onScheduledateClick(): void {
    //console.log("date : " + this.scheduledDate);
    this.outputCalenderDateChanged.emit({ date: this.scheduledDate });
  }
}
