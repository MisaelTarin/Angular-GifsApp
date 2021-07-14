import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {

  constructor(private gifsService: GifsService) { }
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  ngOnInit(): void {
  }
  buscar(){
    const txtValue = this.txtBuscar.nativeElement.value;
   
    this.gifsService.buscarGifs(txtValue);

    this.txtBuscar.nativeElement.value = '';
  }
}
