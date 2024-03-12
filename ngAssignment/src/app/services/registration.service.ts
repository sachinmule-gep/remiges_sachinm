import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private apiUrl = 'https://reqres.in/api/register';

  constructor(private http:HttpClient) {}

  register(email:string, password:string):Observable<any>{

    const body = {email, password}
    return this.http.post(this.apiUrl, body);
  }
}
