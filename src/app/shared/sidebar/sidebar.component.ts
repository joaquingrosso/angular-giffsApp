import { Component } from '@angular/core';
import { GiffsService } from 'src/app/giffs/services/giffs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

  constructor( private giffsService: GiffsService ) { }

  get historial(){
    return this.giffsService.historial;
  }
  
  buscar( valor: string ){
    this.giffsService.buscarGiffs( valor );
  }
}
