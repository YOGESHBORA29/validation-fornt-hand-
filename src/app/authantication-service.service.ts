import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthanticationServiceService {
  loginUrl=' http://localhost:8090/user/login';

  constructor(private http:HttpClient) {
   }


   login(user: any): Observable<any> {



    return this.http.post(`${this.loginUrl}`, user)



  }

 
}
