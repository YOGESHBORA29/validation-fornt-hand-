import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UpdatepasswordService } from '../updatepassword.service';
import { Observable, observable } from 'rxjs';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.css']
})
export class NewpasswordComponent implements OnInit {
  submitted = true;
  email: any;
  mobileno: any;
  password: string = '';




  constructor(private pService: UpdatepasswordService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.email=localStorage.getItem("email");
    this.mobileno=localStorage.getItem("phoneno");
  }
  resetpassword() {
    let data = {
      "email": this.email,
      "phoneno": this.mobileno,
      "password": this.password
    }

    let email:string=this.email;
    this.pService.resetpassword(data,email).subscribe((response) => {
      console.log(response);

      
      this.router.navigate(['/login'])

    });

  }

}
