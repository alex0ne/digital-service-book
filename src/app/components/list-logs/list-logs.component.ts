import { Component, OnInit } from '@angular/core';
import { CarHistoryService } from 'src/app/core/services/car-history.service';
import { EventLog } from 'src/app/core/models/event-log';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { Vehicle } from 'src/app/core/models/vehicle';
import { VehicleService } from 'src/app/core/services/vehicle.service';
import { filter, map } from 'rxjs/operators';


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
    private route: ActivatedRoute
  ) { }

  delete(id) {
    this.carHistoryService.deleteEvent(id).subscribe(() => {
      this.toastr.success('Deleted successfully!');
      this.events = this.carHistoryService.listEvents();
    });
  }

   async ngOnInit() {
    await this.route.paramMap.subscribe(params => {
      //this.vehicle._id = params.get("id");
      this.events = this.carHistoryService.listEvents().pipe(
       map( results => results.filter(r => r.vehicleID === params.get("id")) )
     );
    });
  }
}
