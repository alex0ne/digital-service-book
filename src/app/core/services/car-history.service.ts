import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
//import { CarHistory } from './models/car-history.model';
import { EventLog } from '../models/event-log';
import { environment as env} from '../../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class CarHistoryService {

  constructor( private http : HttpClient ) { }

    listEvents() {

      return this.http.get(`${env.BASE_URL}/appdata/${env.APP_KEY}/ServiceLogs?query={"_acl.creator":"${localStorage.getItem('userId')}"}`)
        .pipe(map((res: Response) => {
          const ids = Object.keys(res);
          const events: EventLog[] = [];
          for (const id of ids) {
            events.push(new EventLog(
              res[id].eventDate, 
              res[id].eventType,
              res[id].millage
              ))
          }          
          return events;
        }));
      
    }

    addEvent (body : EventLog) {
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
