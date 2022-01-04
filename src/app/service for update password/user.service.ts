import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

save='http://localhost:8090/user/save';

  constructor(private http:HttpClient) {

   }

   newUser(user:Object):Observable<Object>
   {

    return this.http.post(`${this.save}`,user);

   }

}
