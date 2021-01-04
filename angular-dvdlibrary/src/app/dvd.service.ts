import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DvdService {

  path = 'http://localhost:8080/';

  config = {
    headers: {
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Methods": "DELETE, POST, GET",
      "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
      }
   };

  constructor(private http: HttpClient) { }

  public getDvdById(dvdId: number) {
    const url = this.path + 'dvd/' + dvdId;
    return this.http.get(url);
  }

  public getAllDvds() {
    const url = this.path + 'dvds';
    return this.http.get(url);
  } 

  public getDvdByTitle(dvdTitle: string) {
    const url = this.path + 'dvds/title/' + dvdTitle;
    return this.http.get(url);
  }

  public getDvdByYear(dvdYear: number) {
    const url = this.path + 'dvds/year/' + dvdYear;
    return this.http.get(url);
  }

  public getDvdByDirector(dvdDirector: string) {
    const url = this.path + 'dvds/director/' + dvdDirector;
    return this.http.get(url);
  }

  public getDvdByRating(dvdRating: string) {
    const url = this.path + 'dvds/rating/' + dvdRating;
    return this.http.get(url);
  }

  public createDvd(title: string, year: number, director: string, rating: string, notes: string) {
    const url = this.path + 'dvd';
    return this.http.post(url,{
        "title": title,
        "releaseYear": year,
        "director": director,
        "rating": rating,
        "notes": notes
    },
    this.config);
  }

  public updateDvd(dvdId: number, title: string, year: number, director: string, rating: string, notes: string) {
    const url = this.path + 'dvd/' + dvdId;
    return this.http.put(url,{
        "dvdId": dvdId,
        "title": title,
        "releaseYear": year,
        "director": director,
        "rating": rating,
        "notes": notes
    });
  }

  public deleteDvd(dvdId: number) {
    const url = this.path + 'dvd/' + dvdId;
    return this.http.delete(url);
  }
}
