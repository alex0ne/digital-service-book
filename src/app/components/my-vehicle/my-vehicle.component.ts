import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/core/services/vehicle.service';
import { Vehicle } from 'src/app/core/models/vehicle';

@Component({
  selector: 'app-my-vehicle',
  templateUrl: './my-vehicle.component.html',
  styleUrls: ['./my-vehicle.component.css']
})
export class MyVehicleComponent implements OnInit {

  vehicle: Vehicle;

  constructor(
    private vehicleService: VehicleService,
  ) { }

  hasVehicle() {
    if (localStorage.getItem('vehicle')) {
      return true;
    } else {
      return false;
    }
  }

  async ngOnInit() {
    await this.vehicleService.getMyVehiicle().then(res => {
      if (res) {
        this.vehicle = res;
        localStorage.setItem("vehicle", res.make)
      }
    });
  }

}
