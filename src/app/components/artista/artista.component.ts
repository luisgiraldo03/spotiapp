import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {

  public loading: boolean = false;

  public artista: any = {}

  constructor(private router: ActivatedRoute, private spotifyService: SpotifyService) {
    this.loading = true;
    this.router.params.subscribe( params =>{
      console.log(params);
      this.getArtista(params['id']);
    });
   }


   public getArtista(id: string){
     this.loading = true;
     this.spotifyService.getArtista(id).subscribe(data => {
       this.artista = data;
       this.loading = false;
      });
   }


}
