import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = environment.root_url + query;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAYu9I8CHdnEOgBAmqQX7grpUQkEVMKOzvKlUoYQ2owlx7MNj_bpzXpl2FVKE6AtB3pI7LpPtdIznVXX4A'
    });
    return this.http.get(url, { headers })
  }

  public getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20').pipe(map((data: any) => {
      return data.albums.items;
    }));
  }


  public getArtistas(termino: string) {
    if (termino && termino.length > 0) {
      return this.getQuery(`search?query=${termino}&type=artist&offset=0&limit=20`)
        .pipe(map((data: any) => {
          return data.artists.items;
        }));
    } else {
      return new Observable((observer) => observer.next());
    }
  }

  public getArtista(id: string){
    return this.getQuery(`artists/${id}`);
  }

}
