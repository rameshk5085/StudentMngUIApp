import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttphelperService {
  apiUrl:string;
  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.baseUrl;
  }
  //private url = 'https://localhost:7258/api/Students';

  getstudent(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/api/Students`);
  }
}
