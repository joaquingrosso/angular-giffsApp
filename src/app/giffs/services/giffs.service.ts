import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Giff, SearchGiffsResponse } from '../interfaces/giffsInterface';

@Injectable({
  providedIn: 'root'
})
export class GiffsService {

  private apiKey      : string = 'IWXMxbCZam0bPFgLOdjdUu8ymSuOOOQe';
  private servicioUrl : string = 'https://api.giphy.com/v1/gifs';
  private _historial  : string[] = [];

  public resultados: Giff[] = [];

  get historial(){
    return [...this._historial];
  }

  constructor( private http: HttpClient ) {

    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
    /*if ( localStorage.getItem('historial') ) {
      this._historial = JSON.parse(localStorage.getItem('historial')!);
    }*/

  }

  buscarGiffs( query: string ){

    query = query.trim().toLowerCase();
    if( !this._historial.includes( query ) ){
      this._historial.unshift( query );
      this._historial = this._historial.splice(0,10);

      localStorage.setItem('historial', JSON.stringify( this._historial ));
    }    

    const params = new HttpParams()
                        .set( 'apiKey', this.apiKey )
                        .set( 'limit', '10' )
                        .set( 'q', query );

    this.http.get<SearchGiffsResponse>( `${ this.servicioUrl }/search`, { params } )
      .subscribe( (resp ) => {
        this.resultados = resp.data;   
        localStorage.setItem('resultados', JSON.stringify( this.resultados ));     
      });

  }

}
