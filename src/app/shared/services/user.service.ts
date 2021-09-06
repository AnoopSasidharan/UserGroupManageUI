import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<any>{
    return this.httpClient.get(`${environment.serviceUrl}api/users`);
  }
  createUser(user: User): Observable<any>{
    return this.httpClient.post<User>(`${environment.serviceUrl}api/users`,user);
  }
  getUser(id: number): Observable<any>{
    return this.httpClient.get(`${environment.serviceUrl}api/users/${id}`);
  }
}
