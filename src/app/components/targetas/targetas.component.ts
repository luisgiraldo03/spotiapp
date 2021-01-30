import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-targetas',
  templateUrl: './targetas.component.html',
  styleUrls: ['./targetas.component.scss']
})
export class TargetasComponent {

  @Input() items: any[] = [];

  constructor(private router: Router) { }

  public verArtista(item: any) {

    let artistaId;

    if (item.type === 'artist') {
      artistaId = item.id;
    } else {
      artistaId = item.artists[0].id;
    }

    this.router.navigate(['/artist', artistaId]);

  }


}
