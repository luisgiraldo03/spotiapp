import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: ['./search.component.scss']
  
})
export class SearchComponent implements OnInit {

  public artistas: any[] = [];
  public loading: boolean;

  constructor(private spotifyService: SpotifyService) {
    this.loading = false;
   }

  ngOnInit(): void {
  }

  public buscar(termino: string) {
    this.loading = true;
    this.spotifyService.getArtistas(termino)
      .subscribe((data: any) => {
        console.log(data);
        this.artistas = data;
        this.loading = false;
      })
  }

}
