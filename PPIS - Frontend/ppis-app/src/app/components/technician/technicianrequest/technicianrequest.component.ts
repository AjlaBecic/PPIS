import { Component, OnInit } from '@angular/core';
import { Problem } from 'src/app/models/problem';
import { RequestService } from 'src/app/services/request.service';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-technicianrequest',
  templateUrl: './technicianrequest.component.html',
  styleUrls: ['./technicianrequest.component.css']
})
export class TechnicianrequestComponent implements OnInit {
  private problem : Problem;
  constructor(
    private requestService : RequestService,
    private route : ActivatedRoute
  ) { }

  getProblem() {
    var id = this.route.snapshot.paramMap.get("id");
    this.requestService.getProblem(id)
    .pipe(first())
    .subscribe(response => {
      if (response.statusCode == 200)
        this.problem = response.data;
    });
  }

  ngOnInit() {
    this.getProblem();
  }

  markAsProgress() {
    //alert(this.problem.id);
    this.requestService.markAsProgress(this.problem.id)
    .pipe(first())
    .subscribe(response => {
      if (response.statusCode == 200) {
        alert("Problem je u toku izvršavanja!");
      }
      else {
        alert("Došlo je do greške!");
      }
    });
  }

  markAsDone() {
    alert(this.problem.id);
    this.requestService.markAsDone(this.problem.id)
    .pipe(first())
    .subscribe(response => {
      if (response.statusCode == 200) {
        alert("Problem uspješno označen kao završen!");
      }
      else {
        alert("Došlo je do greške!");
      }
    });
  }

  markAsClosed() {
    alert(this.problem.id);
    this.requestService.markAsClosed(this.problem.id)
    .pipe(first())
    .subscribe(response => {
      if (response.statusCode == 200) {
        alert("Zahtjev uspješno zatvoren!");
      }
      else {
        alert("Došlo je do greške!");
      }
    });
  }

}

