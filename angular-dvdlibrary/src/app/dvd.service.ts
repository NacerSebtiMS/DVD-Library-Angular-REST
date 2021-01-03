import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DvdService {

  const path = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  public getDvdById(dvdId: int) {
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

  public getDvdByYear(dvdYear: int) {
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

  public createDvd(title: string, year: int, director: string, rating: string, notes: string) {
    const url = this.path + 'dvd';
    return this.http.post(url,{
      params:{
        "title": title,
        "releaseYear": year,
        "director": director,
        "rating": rating,
        "notes": notes
      }
    });
  }

  public updateDvd(dvdId: int, title: string, year: int, director: string, rating: string, notes: string) {
    const url = this.path + 'dvd/' + dvdId;
    return this.http.put(url,{
      params:{
        "dvdId": dvdId,
        "title": title,
        "releaseYear": year,
        "director": director,
        "rating": rating,
        "notes": notes
      }
    });
  }

  public deleteDvd(dvdId: int) {
    const url = this.path + 'dvd/' + dvdId;
    return this.http.delete(url);
  }

}
