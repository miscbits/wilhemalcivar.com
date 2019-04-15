import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { Job } from '../models/job';

@Injectable({
    providedIn: 'root'
})
export class JobService {

  private env = environment;
  private jobsUrl: string;

  constructor(
    private http: HttpClient) {
      this.jobsUrl = `${this.env.apiUrl}/jobs`;
    }

  getJobs() : Observable<Job[]>  {
    return this.http.get<Job[]>(this.jobsUrl);
  }
}
