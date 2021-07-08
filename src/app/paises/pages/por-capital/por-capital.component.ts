import { Component, Input, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/psis.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  
  termino:string="";  
  hayError:boolean=false;
  paises:Pais[]=[];


  constructor(private PaisService:PaisService) { }  
  

  ngOnInit(): void {


  }

  buscar(termino:string){

    this.hayError =  false;
    this.termino =termino;

    this.PaisService.buscarCapital(this.termino)
    .subscribe((paises)=>{
      this.paises = paises;
    },(err)=>{
      this.hayError = true;
      this.paises=[];
    }
    )

  }

  sugerencias(termino:string){
    this.hayError=false;
    this.termino=termino;
    this.PaisService.buscarCapital(this.termino)
    .subscribe((paises)=>{
      this.paises=paises;
    },(err)=>{
      this.hayError = true;
      this.paises=[];
    }
    )

  }

}
