import { ForecastsService } from './services/forecasts.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'weather-forecast';
  weathers: Observable<any>;
  constructor(private fs: ForecastsService) {}
  ngOnInit(): void {}

  handleAddressChange(address) {
    const lat = address.geometry.location.lat();
    const lng = address.geometry.location.lng();
    this.weathers = this.fs.getDailyForecast(lat, lng);
  }
}
