import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { Job } from '../models/job';

@Injectable({
    providedIn: 'root'  // <- ADD THIS
})
export class JobService {

  private env = environment;
  private jobsUrl = `${environment.apiUrl}/jobs`;

  constructor(
    private http: HttpClient) { }

  getJobs() : Observable<Job[]>  {
    return this.http.get<Job[]>(this.jobsUrl);
  }
}
