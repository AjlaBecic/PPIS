import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Activity } from 'src/app/models/activity';
import { Problem } from 'src/app/models/problem';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { ActivityService } from 'src/app/services/activity.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-newactivity',
  templateUrl: './newactivity.component.html',
  styleUrls: ['./newactivity.component.css']
})
export class NewactivityComponent implements OnInit {
  private activityForm : FormGroup;
  private submitted = false;
  private problemId : number;
  private activity : Activity;
  private currentUser : User;
  constructor(
    private formBuilder : FormBuilder,
    private route : ActivatedRoute,
    private userService : UserService,
    private activityService : ActivityService
  ) { 
    this.route.url.subscribe(params => {
      this.problemId = Number.parseInt(this.route.snapshot.paramMap.get('id'));
    });

    this.userService.currentUser.subscribe(x => this.currentUser = x);
  }

  get con() {
    return this.activityForm.controls;
  }

  ngOnInit() {
    this.activityForm =this.formBuilder.group({
      type : ['', Validators.required],
      description : ['', [Validators.required, Validators.minLength(5), Validators.maxLength(250)]]
    });
  }

  submit() {
    this.submitted = true;
    if (!this.activityForm.valid)
      return;
    this.activity = this.activityForm.value;
    this.activity.problemId = this.problemId;
    this.activity.user = this.currentUser;
    this.activityService.newActivity(this.activity)
    .pipe(first())
    .subscribe(response => {
      console.log(response); 
    })
  }

}
