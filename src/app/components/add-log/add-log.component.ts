import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { EventLog } from '../../core/models/event-log';
import { CarHistoryService } from 'src/app/core/services/car-history.service';
import { VehicleService } from 'src/app/core/services/vehicle.service';
import { Vehicle } from 'src/app/core/models/vehicle';

@Component({
  selector: 'app-add-log',
  templateUrl: './add-log.component.html',
  styleUrls: ['./add-log.component.css']
})
export class AddLogComponent implements OnInit {

  bindingModel: EventLog;
  vehicles: Vehicle[];

  constructor(
    private vehicleService: VehicleService,
    private carHistoryService: CarHistoryService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.bindingModel = new EventLog('', '', 0, 0);
  }

  getVehicle(id) {
    return this.vehicles.find(item => item._id === id);
  }

  create() {
    this.carHistoryService.addEvent(
      this.bindingModel).subscribe(() => {
        this.toastr.success('Maintenance log created successfully!');
        this.router.navigate(['/components/list-logs']);
      });
  }

  async ngOnInit() {
    await this.vehicleService.getMyVehiicles().then(res => {
      this.vehicles = res;
    });
  }
}
