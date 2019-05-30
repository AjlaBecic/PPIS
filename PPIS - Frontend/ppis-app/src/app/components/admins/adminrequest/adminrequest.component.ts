import { Component, OnInit } from '@angular/core';
import { Problem } from 'src/app/models/problem';
import { RequestService } from 'src/app/services/request.service';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { Change } from 'src/app/models/change';
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
    private route : ActivatedRoute,
    private userService : UserService
  ) {
    this.userService.currentUser.subscribe(x => this.currentUser = x);

  }

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
    this.change=new Change();
  }

  markAsProblem() {
    //alert(this.request.id);
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
    //console.log("problem: ",this.request);
    //console.log("promjena", this.change);
    //this.change.problem=this.request;
    //this.change.user = new User(this.currentUser.id, null, null, null, null, null);
    //this.problem.isProblem=true;

    this.change.user=new User(this.currentUser.id, null, null, null, null, null);
    this.change.problem=this.request;
    this.change.title=this.request.title;
    this.change.description=this.request.description;
    this.change.isProblem=true;
    this.change.isChange=false;
    //var change1=new Change(7,this.request.title, this.request.description, new User(this.request.user.id, this.request.user.firstName , this.request.user.lastName, this.request.user.mail, this.request.user.userName, this.request.user.role, this.request.user.group), "","", new Date(), new Date(), false, "","", null,"","","", this.request, false, false, false);
    this.requestService.newChangeRequest(this.change)
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
