import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Vehicle } from 'src/app/core/models/vehicle';
import { VehicleService } from 'src/app/core/services/vehicle.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  bindingModel : Vehicle

  constructor(
    private vehicleService: VehicleService,
    private toastr : ToastrService,
    private router : Router
  ) { 
    this.bindingModel = new Vehicle('','','', 0, '')
  }

  create() {
    this.vehicleService.addVehicle(
      this.bindingModel).subscribe(() => {
        this.toastr.success('Vehicle created successfully!')
        this.router.navigate(['/components/my-vehicle'])
      })
  }

  ngOnInit() {
  }

}
