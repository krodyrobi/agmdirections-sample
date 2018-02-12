import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  lat: Number = 24.799448;
  lng: Number = 120.979021;

  dir = {
    origin: {lat: 24.799448, lng: 120.979021},
    destination: {lat: 24.799524, lng: 120.975017}
  };

  constructor() { }

  ngOnInit() {
  }

}
