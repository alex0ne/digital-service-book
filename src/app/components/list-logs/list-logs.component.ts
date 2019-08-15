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
  events: Observable<EventLog[]>
  vehicles: Vehicle[]

  constructor(
    private vehicleService: VehicleService,
    private carHistoryService : CarHistoryService,
    private toastr : ToastrService,
  ) { }

  delete(id){
    this.carHistoryService.deleteEvent(id).subscribe(()=> {
      this.toastr.success('Deleted successfully!')
      this.events = this.carHistoryService.listEvents()
    })
  }

  getVehicle(id) {
    const make = this.vehicles.find(item => item._id = id).make
    const model = this.vehicles.find(item => item._id = id).model
    const productionYear = this.vehicles.find(item => item._id = id).productionYear
    return `${make} ${model}, ${productionYear}`
  }

  async ngOnInit() {
    this.events = this.carHistoryService.listEvents()
    await this.vehicleService.getMyVehiicles().then(res => {
      this.vehicles = res;
    })
    //console.log(this.vehicles.find(item => item._id = "5d552b187e910233edc1a298").make);
    
  }

}
