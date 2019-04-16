import { environment } from '../../environments/environment';
import { JobService } from '../services/job.service'
import { Component, OnInit } from '@angular/core';
import { Job } from '../models/job';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})

export class CareerComponent implements OnInit {

  env = environment;

  jobs: Job[]
  jobService: JobService;

  constructor(jobService: JobService) { 
    this.jobService = jobService;
  }

  ngOnInit() {
    this.getJobs();
  }

  getJobs(): void {
    this.jobService.getJobs()
      .subscribe(jobs => {
        this.jobs = jobs;
      });
  }

  getUrl(): string {
    return this.env.apiUrl;
  }

}
