import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/service/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  get historial(): string[] {
    return this._gifsService.historial;
  }

  constructor(private _gifsService: GifsService) { }

  buscar(valor: string) {
    this._gifsService.buscarGifs(valor);
  }

}
