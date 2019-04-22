import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminService } from 'src/app/core/services/admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  users: Observable<any>

  constructor(
    private adminService: AdminService,
  ) { }

  async deleteUser(id) {
    await this.adminService.deleteUser(id)
    this.users = this.adminService.getUsers();
  }

  ngOnInit() {
    this.users = this.adminService.getUsers();
  }

}
