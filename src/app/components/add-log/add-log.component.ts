import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { EventLogModel } from '../../core/models/event-log';
import { CarHistoryService } from 'src/app/core/services/car-history.service';

@Component({
  selector: 'app-add-log',
  templateUrl: './add-log.component.html',
  styleUrls: ['./add-log.component.css']
})
export class AddLogComponent implements OnInit {

  bindingModel : EventLogModel

  constructor(
    private carHistoryService : CarHistoryService,
    private toastr : ToastrService,
    private router : Router
  ) {
    this.bindingModel = new EventLogModel('', '', 0);
  }

  create() {
    this.carHistoryService.addEvent(
      this.bindingModel).subscribe(() => {
        this.toastr.success('Maintenance log created successfully!')
        this.router.navigate(['/components/list-logs'])
      })
  }

  ngOnInit() {
  }

}