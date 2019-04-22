import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment as env } from '../../../environments/environment';
import { map } from 'rxjs/operators'
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private http: HttpClient,
    private toastr : ToastrService,
  ) { }

  getUsers(){
    return this.http.get(`${env.BASE_URL}/user/${env.APP_KEY}`)
      .pipe(map((res:[]) => {
        const users:[] = [];
          for (const obj of res) {
            users.push(obj)
          }
        return users;
      }));
  }

  deleteUser(id: string){
    return this.http.delete(`${env.BASE_URL}/user/${env.APP_KEY}/${id}?hard=true`).toPromise()
      .then(res => {
        console.log(res);
        this.toastr.success('User deleted', 'Success');
      })
      .catch(err => {
        console.error(err);
      })
  }
}
