import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  private apiUrl = 'https://reqres.in/api/users';

  constructor(private http:HttpClient) { }

  getUsers():Observable<any>{
    return this.http.get(this.apiUrl);
  }

  getUser(userId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${userId}`);
  }

  updateUser(userId: number, updatedUserData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${userId}`, updatedUserData);
  }

  deleteUser(userId: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${userId}`);
  }
}


