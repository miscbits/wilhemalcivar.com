import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { Job } from '../models/job';


@Injectable({
    providedIn: 'root'  // <- ADD THIS
})
export class JobService {

  constructor() { }

  getJobs() : Observable<Job[]>  {
    return of(new Array<Job>());
  }

}
