import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../core/services/auth.service';
import { VehicleService } from 'src/app/core/services/vehicle.service';
import { Vehicle } from 'src/app/core/models/vehicle';

@Component({
  selector: 'app-my-vehicle',
  templateUrl: './my-vehicle.component.html',
  styleUrls: ['./my-vehicle.component.css']
})
export class MyVehicleComponent implements OnInit {

  vehicle: Vehicle;
  id: string

  constructor(
    private vehicleService: VehicleService,
  ) {  }


  async ngOnInit() {
      await this.vehicleService.getMyVehiicle().then(res => {
        this.vehicle = res;
      });            
  }

}
