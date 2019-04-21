import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
//import { CarHistory } from './models/car-history.model';
import { environment as env} from '../../../environments/environment'
import { Vehicle } from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor( private http: HttpClient) { }

  addVehicle(body: Vehicle){
    console.log(body);
    return this.http.post(`${env.BASE_URL}/appdata/${env.APP_KEY}/vehicles`, body)
  }

  async getMyVehiicle () {
    let vehicle: Vehicle;
    await this.http.get<Vehicle>(`${env.BASE_URL}/appdata/${env.APP_KEY}/vehicles?query={"_acl.creator":"${localStorage.getItem('userId')}"}`)
    .toPromise().then((res) => { vehicle = res[0]})
    return vehicle;
  }
}
