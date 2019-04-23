import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { environment as env} from '../../../environments/environment'
import { Vehicle } from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor( private http: HttpClient) { }

  addVehicle(body: Vehicle){
    return this.http.post(`${env.BASE_URL}/appdata/${env.APP_KEY}/vehicles`, body)
  }

  editVehicle(body: Object, id) {
    return this.http.put(`${env.BASE_URL}/appdata/${env.APP_KEY}/vehicles/${id}`, body).toPromise()
  }

  async getMyVehiicle () {
    let vehicle: Vehicle;
    await this.http.get<Vehicle>(`${env.BASE_URL}/appdata/${env.APP_KEY}/vehicles?query={"_acl.creator":"${localStorage.getItem('userId')}"}`).toPromise().then((res) => { vehicle = res[0]})
    return vehicle;
  }
}
