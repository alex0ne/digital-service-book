import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminService } from 'src/app/core/services/admin.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  users: Observable<any>

  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this.users = this.adminService.getUsers();
  }

}
