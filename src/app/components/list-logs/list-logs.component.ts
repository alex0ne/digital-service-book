import { Component, OnInit } from '@angular/core';
import { CarHistoryService } from 'src/app/core/services/car-history.service';
import { EventLog } from 'src/app/core/models/event-log';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-logs',
  templateUrl: './list-logs.component.html',
  styleUrls: ['./list-logs.component.css']
})
export class ListLogsComponent implements OnInit {
  events: Observable<EventLog[]>

  constructor(
    private carHistoryService : CarHistoryService
  ) { }

  ngOnInit() {
    this.events = this.carHistoryService.listEvents()
  }

}
