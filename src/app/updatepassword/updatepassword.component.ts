import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UpdatepasswordService } from '../updatepassword.service';
import { Observable, observable } from 'rxjs';

import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.css']
})
export class UpdatepasswordComponent implements OnInit {
  EmailForm:FormGroup |any;

  users: Observable<User[]> | any;
  email: string = '';
  user: User | any;
  submitted = false;
  message:string='';


  constructor(private pService: UpdatepasswordService, private router: Router,

    private route: ActivatedRoute) { }

  ngOnInit(): void {
    
   

  }

  onSubmit()
  {}


  verifyemail()
  {
    
    this.pService.verifyemail(this.email).subscribe((response) => {
      console.log(response);
      if(response==true)
      {
        console.log(this.email);
        localStorage.setItem("email", this.email);
        this.router.navigate(['/verifyphoneno']);
      }
      else{
        this.message='Invalid-Email';

      }
    });
  }


}



