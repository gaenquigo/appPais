import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais! : Country  ;
  constructor(private activeRoute : ActivatedRoute,
              private paisService : PaisService) { }

  ngOnInit(): void {

    //forma 1 con rxjs

    this.activeRoute.params
    .pipe(switchMap( ({id})=> this.paisService.buscarPaisPorAlpha(id)),
                tap(console.log)
    )
    .subscribe(pais=> this.pais = pais[0])

    // forma dos con angular core

    // this.activeRoute.params
    // .subscribe(
    //   ({id}) => {
    //     console.log(id);
    //     this.paisService.buscarPaisPorAlpha(id)
    //     .subscribe(pais =>{
    //       console.log(pais);
    //     })
    //   });

  

}

}
