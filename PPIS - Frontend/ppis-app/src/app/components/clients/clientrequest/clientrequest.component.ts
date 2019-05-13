import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Problem } from 'src/app/models/problem';
import { first } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-clientrequest',
  templateUrl: './clientrequest.component.html',
  styleUrls: ['./clientrequest.component.css']
})
export class ClientrequestComponent implements OnInit {
  private requestForm : FormGroup;
  private submitted = false;
  private problem : Problem;
  private currentUser : User;

  constructor(
    private requestService : RequestService,
    private formBuilder : FormBuilder,
    private userService : UserService
  ) { 
    this.userService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
    this.requestForm = this.formBuilder.group({
      title : ['', Validators.required],
      description : ['', [Validators.maxLength(100), Validators.minLength(5), Validators.required]]
    });
  }

  get con() {
    return this.requestForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.requestForm.invalid)
      return;
    this.problem = this.requestForm.value;// new Problem(null, this.con.title.value, this.con.description.value, null, this.currentUser.id);
    this.problem.userId = this.currentUser.id;
   

    this.requestService.newClientRequest(this.problem)
    .pipe(first())
    .subscribe(
      data => {
        if (data.statusCode == 200) {
          console.log(data);
        }
        else {

        }
      },

      error => {
        
      }
    )
    
  }

}
