import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, pipe, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {
  

  termino : string = '';

  @Input() placeholder : string = ''

  
@Output() onEnter : EventEmitter<string> = new EventEmitter();
@Output() onDebonce : EventEmitter<string> = new EventEmitter();

debouncer : Subject<string> =  new Subject();

ngOnInit() {
    
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe(valor =>{
      this.onDebonce.emit(valor);
      console.log("deboncer : ", valor);
    })
}

  buscar(){
    this.onEnter.emit(this.termino);

  }

  teclaPresionada(){
    this.debouncer.next(this.termino);
  }



}
