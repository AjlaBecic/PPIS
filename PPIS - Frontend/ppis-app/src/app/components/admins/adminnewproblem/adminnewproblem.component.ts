import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { RequestService } from 'src/app/services/request.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Problem } from 'src/app/models/problem';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-adminnewproblem',
  templateUrl: './adminnewproblem.component.html',
  styleUrls: ['./adminnewproblem.component.css']
})
export class AdminnewproblemComponent implements OnInit {
  private currentUser : User;
  private problemForm : FormGroup;
  private submitted = false;
  private problem : Problem;
  constructor(
    private userService : UserService,
    private requestService : RequestService,
    private formBuilder : FormBuilder
  ) { 
    this.userService.currentUser.subscribe(x => this.currentUser = x);
  }

  get con() {
    return this.problemForm.controls;
  }

  ngOnInit() {
    this.problemForm = this.formBuilder.group({
      title : ['', Validators.required],
      description : ['', [Validators.required, Validators.maxLength(250), Validators.minLength(5)]],
      consequences : ['', [Validators.maxLength(250), Validators.minLength(5)]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.problemForm.invalid)
      return;
    this.problem = this.problemForm.value;
    this.problem.user = new User(this.currentUser.id, null, null, null, null, null);
    this.problem.isProblem = true;
    this.requestService.newClientRequest(this.problem)
    .pipe(first())
    .subscribe(response => {
      if (response.statusCode == 200) {

      }
    })
  }

}
