import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UpdatepasswordService } from '../updatepassword.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-verifyphoneno',
  templateUrl: './verifyphoneno.component.html',
  styleUrls: ['./verifyphoneno.component.css']
})
export class VerifyphonenoComponent implements OnInit {
  submitted = false;
  email:any;
  mobileno: string = '';
  message:string='';

  constructor(private pService: UpdatepasswordService, private router: Router,

    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.email=localStorage.getItem("email");
  }

  verifyphone()
  {

    let data={
      "email":this.email,
      "phoneno":this.mobileno
      
    }

    this.pService.verifyephone(data).subscribe((response) => {
      console.log(response);
      if(response==true)
      {
        localStorage.setItem("phoneno",this.mobileno);
        this.router.navigate(['/newpassword']);
      }
      else{
        this.message='Invalid Mobile Number!';
      }
    });
  }

}

  
