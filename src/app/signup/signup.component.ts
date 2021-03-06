import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthanticationServiceService } from '../authantication-service.service';
import { UserService } from '../user.service';
import { User } from '../user';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup | any;
  submitted = false;
  user: User = new User();




  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private uservice: UserService) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group(
      {
        firstname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
        lastname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
        email: ['', [Validators.required, Validators.email]],
        mobile: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]]

      }
    )
  }

  get f() { return this.signupForm.controls; }

  signUp() {
    this.submitted = true;
    this.user = this.signupForm.value;
    // stop the process here if form is invalid
    if (this.signupForm.invalid) {
      return;
    }

    this.save();
  }
  save() {

    this.uservice.newUser(this.user).subscribe((response) => {

      console.log(response);
      this.router.navigate(['/login']);


    });

  }



}


