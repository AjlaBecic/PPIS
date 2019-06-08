import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Change } from 'src/app/models/change';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-technician-changes',
  templateUrl: './technician-changes.component.html',
  styleUrls: ['./technician-changes.component.css']
})

export class TechnicianChangesComponent implements OnInit {
  changes : Change[];
  constructor(private requestService : RequestService) { }

  fetch() {
    this.requestService.getChangesForTech()
    .pipe(first())
    .subscribe(response => {
      if (response.statusCode == 200)
        this.changes = response.data;
    });
  }

  ngOnInit() {
    this.fetch();
  }

}
