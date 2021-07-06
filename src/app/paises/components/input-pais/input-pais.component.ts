import { Component,EventEmitter ,Output } from '@angular/core';

@Component({
  selector: 'app-input-pais',
  templateUrl: './input-pais.component.html',
  styles: [
  ]
})
export class InputPaisComponent{


  @Output() onEnter: EventEmitter<string> =new EventEmitter();

  termino:string='';
  buscar(){

    this.onEnter.emit(this.termino);
    
  }

}
