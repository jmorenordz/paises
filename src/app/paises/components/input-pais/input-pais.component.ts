import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-input-pais',
  templateUrl: './input-pais.component.html',
  styles: [
  ]
})
export class InputPaisComponent implements OnInit{


  @Output() onEnter: EventEmitter<string> =new EventEmitter();
  @Output() onDebounce: EventEmitter<string> =new EventEmitter();

  @Input() placeholder:string = '';

  decouncer:Subject<string> =new Subject(); 
 
  termino:string='';
  valor:string='';

  buscar(){

    this.onEnter.emit(this.termino);
    
  }

  ngOnInit(){
    this.decouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe( valor=>{

      this.onDebounce.emit(valor);

    } )
  }

  teclaPresionada(){
    this.decouncer.next( this.termino );
    
  }


}
