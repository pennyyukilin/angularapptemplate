import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from './models';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) { }

  fetchPerson(userid: string = ''): Observable<Person[]> {
    return this.http.get<Person[]>('https://dowcoreapi.azure-api.net/mi/api/person/' + userid);
  }

}
