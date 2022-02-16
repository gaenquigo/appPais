import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li{
      cursor : pointer;
    }
    `  ]
})
export class PorPaisComponent{
  termino : string = '';
  hayError : boolean = false;
mostrarsugerencias : boolean = false;

  paises : Country[] = [];
  paisesSugeridos : Country[] = [];

  constructor(private paisService : PaisService) { }

  buscar(termino : string){
    this.mostrarsugerencias = false;
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(termino)
    .subscribe( paises => {
          this.paises= paises
          }, error  => {
              this.hayError = true;
              this.paises = [];
          });

    
  }

  sugerencias(termino : string){

    this.hayError = false;
    this.termino = termino;
    this.mostrarsugerencias = true;
    //todo

    this.paisService.buscarPais(termino).subscribe(paises => 
      this.paisesSugeridos = paises.splice(0,5),
      (err) => this.paisesSugeridos = []
    )

  }

  buscarSugerido(termino : string){
    this.buscar(termino);

  }



}
