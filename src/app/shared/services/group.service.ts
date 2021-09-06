import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Group } from '../models/group';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private httpClient: HttpClient) { }

  getAllGroups(): Observable<any>{
    return this.httpClient.get(`${environment.serviceUrl}api/groups`);
   }
  createGroup(group: Group): Observable<any>{
   return this.httpClient.post<Group>(`${environment.serviceUrl}api/groups`,group);
  }
}
