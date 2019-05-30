import { Component, OnInit } from '@angular/core';

import { Change } from 'src/app/models/change';
import { RequestService } from 'src/app/services/request.service';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-boardchange',
  templateUrl: './boardchange.component.html',
  styleUrls: ['./boardchange.component.css']
})
export class BoardchangeComponent implements OnInit {
  private change : Change;
  constructor(
    private requestService : RequestService,
    private route : ActivatedRoute
  ) { }

  getChange() {
    var id = this.route.snapshot.paramMap.get("id");
    this.requestService.getChange(id)
    .pipe(first())
    .subscribe(response => {
      if (response.statusCode == 200)
        this.change = response.data;
    });
  }

  ngOnInit() {
    this.getChange();
  }

  markAsApproved() {
    //alert(this.change.id);
    this.requestService.markAsApproved(this.change.id)
    .pipe(first())
    .subscribe(response => {
      if (response.statusCode == 200) {
        alert("Promjena je odobrena!");
      }
      else {
        alert("Došlo je do greške!");
      }
    });
  }


}

