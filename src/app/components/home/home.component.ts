import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public loading: boolean = true;


  public nuevasCanciones: any[] = [];

  constructor(private spotifyService: SpotifyService) {
    this.spotifyService.getNewReleases()
      .subscribe((data: any) => {
        this.nuevasCanciones = data;
        this.loading = false;
      });
  }

  ngOnInit(): void {
  }

}
