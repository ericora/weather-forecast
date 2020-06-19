import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ForecastsService {
  constructor(private http: HttpClient) {}
  getDailyForecast(lat, lng) {
    const url = environment.weatherUrl;
    const key = environment.weatherKey;
    // const url =
    //   'https://api.weatherbit.io/v2.0/forecast/daily?lat=42&lon=50&key=bcf7670eefdb46aa9d3409e3157b6846';
    let params = new HttpParams();
    params = params.set('lat', lat.toString());
    params = params.set('lon', lng.toString());
    params = params.set('key', key);
    return this.http
      .get<any>(url, {
        observe: 'response',
        params,
      })
      .pipe(
        map((res) => {
          let weathers = res.body.data;
          weathers = weathers.map((res) => {
            return {
              minTemp: res.min_temp,
              maxTemp: res.max_temp,
              weather: res.weather.description,
              icons: `https://www.weatherbit.io/static/img/icons/${res.weather.icon}.png`,
              date: res.datetime,
            };
          });

          return weathers;
        })
      );
  }
}
