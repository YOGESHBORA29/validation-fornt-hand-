import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthanticationServiceService } from '../authantication-service.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any;;
  email = ''
  password = ''
  invalidLogin = false
  errorMessage = 'Invalid Credentials';
  successMessage: string = '';
  loginSuccess = false;
  submitted=false;

  user: User= new User();
  constructor(private formBuilder: FormBuilder,private router:Router,private lservice:AuthanticationServiceService) {
    this.loginForm = this.formBuilder.group({
     
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    
    });
   }

  ngOnInit(): void {

  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.user = this.loginForm.value;
    // stop the process here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.checkLogin();
  }


  checkLogin() {

    // let user = {

    //   "email": this.email,

    //   "password": this.password

    // }

    this.lservice.login(this.user).subscribe((response) => {

      console.log(response);

      if (response==true) {

        this.router.navigate(['']);

        sessionStorage.setItem('email', this.email)

        this.invalidLogin = false;

        this.loginSuccess = true;

        this.successMessage = 'Reset Sucessful.';

      }

      else {

        this.invalidLogin = true

      }

    });

    this.loginSuccess = false;



  }
}
