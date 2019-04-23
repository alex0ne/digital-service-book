import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/core/services/vehicle.service';
import { Vehicle } from 'src/app/core/models/vehicle';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.css']
})
export class EditVehicleComponent implements OnInit {

  vehicle: Vehicle;

  constructor( 
    public authService: AuthService,
    private vehicleService: VehicleService,
    private toastr : ToastrService,
    private router : Router
  ) { 
    this.vehicle = new Vehicle('','','', 0, '', '')
  }

  async update() {
    const body = {
      make: this.vehicle.make, 
      model: this.vehicle.model, 
      productionYear: this.vehicle.productionYear,
      millage: this.vehicle.millage,
      imageUrl: this.vehicle.imageUrl
    }
    await this.vehicleService.editVehicle(body, this.vehicle._id);
    this.toastr.success('Vehicle updated successfully!')
    this.router.navigate(['/components/my-vehicle'])
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
