import { Component } from '@angular/core';
import { GiffsService } from 'src/app/giffs/services/giffs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent {

  get resultados(){
    return this.giffsService.resultados;
  }

  constructor( private giffsService: GiffsService ) { }

}
