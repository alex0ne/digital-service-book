import { Component, OnInit } from '@angular/core';
import { CarHistoryService } from 'src/app/core/services/car-history.service';
import { EventLog } from 'src/app/core/models/event-log';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Vehicle } from 'src/app/core/models/vehicle';
import { VehicleService } from 'src/app/core/services/vehicle.service';


@Component({
  selector: 'app-list-logs',
  templateUrl: './list-logs.component.html',
  styleUrls: ['./list-logs.component.css']
})

export class ListLogsComponent implements OnInit {
  events: Observable<EventLog[]>;
  constructor(
    private vehicleService: VehicleService,
    private carHistoryService: CarHistoryService,
    private toastr: ToastrService,
  ) { }

  delete(id) {
    this.carHistoryService.deleteEvent(id).subscribe(() => {
      this.toastr.success('Deleted successfully!');
      this.events = this.carHistoryService.listEvents();
    });
  }

   async ngOnInit() {
    this.events = this.carHistoryService.listEvents();
  }
}
