import { Component, OnInit } from '@angular/core';
import { Problem } from 'src/app/models/problem';
import { RequestService } from 'src/app/services/request.service';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-adminrequest',
  templateUrl: './adminrequest.component.html',
  styleUrls: ['./adminrequest.component.css']
})
export class AdminrequestComponent implements OnInit {
  private request : Problem;
  constructor(
    private requestService : RequestService,
    private route : ActivatedRoute
  ) { }

  getProblem() {
    var id = this.route.snapshot.paramMap.get("id");
    this.requestService.getRequest(id)
    .pipe(first())
    .subscribe(response => {
      if (response.statusCode == 200)
        this.request = response.data;
    });
  }

  ngOnInit() {
    this.getProblem();
  }

  markAsProblem() {
    alert(this.request.id);
    this.requestService.markAsProblem(this.request.id)
    .pipe(first())
    .subscribe(response => {
      if (response.statusCode == 200) {
        alert("Zahtjev uspješno označen kao problem!");
      }
      else {
        alert("Došlo je do greške!");
      }
    });
  }
}
