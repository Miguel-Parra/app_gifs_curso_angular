import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../service/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {
  @ViewChild('txtBuscar') textoBuscar!: ElementRef<HTMLInputElement>;

  constructor(
    private _gifsService: GifsService
  ) { }

  buscar() {
    const valor = this.textoBuscar.nativeElement.value
    if (valor.trim().length === 0) return; //no ingresar vacios
    this._gifsService.buscarGifs(valor);
    this.textoBuscar.nativeElement.value = "";
  }

}
