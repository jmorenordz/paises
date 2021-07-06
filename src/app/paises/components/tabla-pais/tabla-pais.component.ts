import { Component, Input } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/psis.interface';
import { PorPaisComponent } from '../../pages/por-pais/por-pais.component';

@Component({
  selector: 'app-tabla-pais',
  templateUrl: './tabla-pais.component.html',
  styles: [
  ]
})
export class TablaPaisComponent {  

  @Input() paises:Pais[]=[];
  
  constructor( ) { }

}
