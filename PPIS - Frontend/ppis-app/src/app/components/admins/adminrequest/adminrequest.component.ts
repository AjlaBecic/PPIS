import { Component, OnInit } from '@angular/core';
import { Problem } from 'src/app/models/problem';
import { Change } from 'src/app/models/change';
import { RequestService } from 'src/app/services/request.service';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-adminrequest',
  templateUrl: './adminrequest.component.html',
  styleUrls: ['./adminrequest.component.css']
})
export class AdminrequestComponent implements OnInit {
  private request : Problem;
  private change : Change;
  private currentUser : User;
  constructor(
    private requestService : RequestService,
    private route : ActivatedRoute,private userService : UserService
    ) {
      this.userService.currentUser.subscribe(x => this.currentUser = x);
    }

  getProblem() {
    alert("usla u getProblem");
    var id = this.route.snapshot.paramMap.get("id");
    this.requestService.getRequest(id)
    .pipe(first())
    .subscribe(response => {
      if (response.statusCode == 200)
        this.request = response.data;
        //this.change.problem=response.data;
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

  markAsChange() {

    //alert("usla u mark as change");
    //console.log("probelm: ",this.request);
    //console.log("promjena", this.change);
    //this.change.problem=this.request;
    //this.change.user = new User(this.currentUser.id, null, null, null, null, null);
    //this.problem.isProblem=true;
    var change1=new Change(7,this.request.title, "opis", new User(this.request.user.id, null, null, null, null, null), "ooo","s", new Date("22/10/1988"), new Date(25/12/2000), false, "","f", 12,"in","re","up", this.request, false, false, false);
    this.requestService.newChangeRequest(change1)
    .pipe(first())
    .subscribe(response => {
      if (response.statusCode == 200) {
        alert("Uspješno kreirana promjena!");
      }
      else {
        alert("Došlo je do greške!");
      }
    })
  }

}
