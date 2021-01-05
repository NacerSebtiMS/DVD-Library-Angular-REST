import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {from} from 'rxjs';

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
    const data = {
      "title": title,
      "releaseYear": year,
      "directorName": director,
      "rating": rating,
      "notes": notes
    };
    return this.http.post(url,data);
  }
  
  public updateDvd(dvdId: number, title: string, year: number, director: string, rating: string, notes: string) {
    const url = this.path + 'dvd/' + dvdId;
    const data = {
      "id": dvdId,
      "title": title,
      "releaseYear": year,
      "directorName": director,
      "rating": rating,
      "notes": notes
    };
    return this.http.put(url,data);
  }

  public deleteDvd(dvdId: number) {
    const url = this.path + 'dvd/' + dvdId;
    return this.http.delete(url);
  }

/*
  public updateDvd(dvdId: number, title: string, year: number, director: string, rating: string, notes: string) {
    const url = this.path + 'dvd/' + dvdId;
    const dvd = {
        "dvdId": dvdId,
        "title": title,
        "releaseYear": year,
        "director": director,
        "rating": rating,
        "notes": notes
    };

    return from(
      fetch(
        url,
        {
          body: JSON.stringify(dvd),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'PUT',
          mode: 'no-cors'
        }));
  }
  */
}
