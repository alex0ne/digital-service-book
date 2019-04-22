import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment as env } from '../../../environments/environment';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getUsers(){
    // this.http.get(`${env.BASE_URL}/user/${env.APP_KEY}`)
    // .toPromise().then(res => console.log(res)
    // )
    return this.http.get(`${env.BASE_URL}/user/${env.APP_KEY}`)
      .pipe(map((res:[]) => {
        const users:[] = [];
          for (const obj of res) {
            users.push(obj)
          }
        return users;
      }));
  }
}
