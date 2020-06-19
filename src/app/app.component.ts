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
  ngOnInit(): void {
    this.fs.getDailyForecast(42, 50).subscribe((res) => console.log(res));
  }

  handleAddressChange(address) {
    console.log(address.geometry.location);
    const lat = address.geometry.location.lat();
    const lng = address.geometry.location.lng();
    this.weathers = this.fs.getDailyForecast(lat, lng);
  }
}
