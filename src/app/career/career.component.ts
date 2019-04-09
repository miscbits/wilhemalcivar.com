import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})

export class CareerComponent implements OnInit {

  env = JSON.stringify(environment);

  constructor() { }

  ngOnInit() {
  }

}
