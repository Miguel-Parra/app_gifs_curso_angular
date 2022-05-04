import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKeyGiphy: string = 'HOMMSR0dtFLr5Kx2j9YyBrVbUX0J4tkJ';
  private servicioURL: string = 'http://api.giphy.com/v1/gifs';
  private _historial: string[] = [];
  public resultados: Gif[] = [];

  get historial(): string[] {
    return [...this._historial]
  }

  async buscarGifs(query: string) {
    query = query.trim().toLocaleLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10); //mantener solo 10
      localStorage.setItem('historial', JSON.stringify(this._historial))
    }
    const parametros = new HttpParams()
      .set('api_key', this.apiKeyGiphy)
      .set('q', query)
      .set('limit', 10);

    this._httpClient.get<SearchGifsResponse>(`${this.servicioURL}/search`, {params: parametros})
      .subscribe((respuesta) => {
        // console.log(respuesta.data);
        this.resultados = respuesta.data
        localStorage.setItem('ultimoResultado', JSON.stringify(this.resultados))
      })
  }

  constructor(private _httpClient: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('ultimoResultado')!) || [];
    // if (localStorage.getItem('historial')) {
    //   this._historial = JSON.parse(localStorage.getItem('historial')!);
    // }
  }
}