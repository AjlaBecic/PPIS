import { Component, OnInit } from '@angular/core';
import { Change } from 'src/app/models/change';
import { Problem } from 'src/app/models/problem';
import { RequestService } from 'src/app/services/request.service';

import { first } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cmanagerchanges',
  templateUrl: './cmanagerchanges.component.html',
  styleUrls: ['./cmanagerchanges.component.css']
})
export class CmanagerchangesComponent implements OnInit {
  private filter : string;
  private changes : Change[];
  constructor(
    private requestService : RequestService,
    private route : ActivatedRoute
  ) {
    this.route.url.subscribe(params => {
      this.filter = this.route.snapshot.paramMap.get('filter');
      this.changes = [];
      this.getChanges();
    });

  }

  getChanges() {

    if (this.filter === 'all') {
      //alert("usla1");
      this.requestService.getAllChanges()
      .pipe(first())
      .subscribe(response => {
        if (response.statusCode == 200)
          this.changes = response.data;
          console.log(this.changes);
      });
    }else {
      //alert("usla 2");
      this.requestService.getNewChanges()
      .pipe(first())
      .subscribe(response => {
        if (response.statusCode == 200)
          this.changes = response.data;
          console.log(this.changes);
      });
    }



  }

  ngOnInit() {
    this.getChanges();
  }
}

