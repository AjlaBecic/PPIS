import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  submitted = false;

  constructor(
    private formBuilder : FormBuilder,
    private userService : UserService,
    private router : Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username : ['', Validators.required],
      password : ['', Validators.required]
    });
  }

  get con() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid)
      return;
    this.userService.login(this.con.username.value, this.con.password.value)
    .pipe(first())
    .subscribe(data => {
      console.log(data);
      if (data.statusCode == 200) {
        if (data.data.role === 'client')
          this.router.navigate(['/client']);
        else if (data.data.role === 'admin')
          this.router.navigate(['/admin']);
        else if (data.data.role === 'manager')
          this.router.navigate(['/manager']);
        else if (data.data.role === 'technician')
          this.router.navigate(['/technician']);
        else if (data.data.role === 'cmanager')
          this.router.navigate(['/cmanager']);
        else if (data.data.role === 'board')
          this.router.navigate(['/board']);
      }
    })
  }
}
