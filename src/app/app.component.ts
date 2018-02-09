import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat: Number = 24.799448;
  lng: Number = 120.979021;

  dir = {
    origin: {lat: 24.799448, lng: 120.979021},
    destination: {lat: 24.799524, lng: 120.975017}
  };
}
