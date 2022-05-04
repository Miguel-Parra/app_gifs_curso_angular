import { Component, OnInit } from '@angular/core';
import { GifsService } from '../service/gifs.service';
import 'animate.css';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent {

  get resultados() {
    return this._gifsService.resultados;
  }

  constructor(private _gifsService: GifsService) { }

}
