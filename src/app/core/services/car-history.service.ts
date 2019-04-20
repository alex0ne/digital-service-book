import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
//import { CarHistory } from './models/car-history.model';
import { EventLogModel } from '../models/event-log';
import { environment as env} from '../../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class CarHistoryService {

  constructor( private http : HttpClient ) { }

    // listTasks() {
    //     return this.http.get(`${baseUrl}.json`)
    //   .pipe(map((res : Response) => {
    //     const ids = Object.keys(res);
    //     const tasks : ListTasks[] = [];
    //     for (const id of ids) {
    //       tasks.push(new ListTasks(id, res[id].name, 
    //         res[id].description, res[id].deadline));
    //     }

    //     return tasks;
    //   }));
    // } 

    addEvent (body : EventLogModel) {
      console.log(body);
      
      return this.http.post(`${env.BASE_URL}/appdata/${env.APP_KEY}/ServiceLogs`, body)
    }

    // viewDetails(id : string) {
    //     return this.http.get<ListTasks>(`${baseUrl}${id}/.json`)
    // } 

    // editTask(body) {
    //     return this.http.patch(`${baseUrl}/.json`, body)

    // }

    // deleteTask(id : string) {
    //    return this.http.delete(`${baseUrl}${id}/.json`)
    // }

}
