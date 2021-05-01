import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.scss']
})
export class OperacionesComponent implements OnInit {

  multiplicador:number;
  multiplicando:number;
  resultado:"";
   modal:boolean=false;
   frase:string;
   icono:string;
   color:string;

  constructor() { }

  ngOnInit(): void {
    this.getMultiplicando();
    this.getMultiplicador();
  }

  //Generar multiplicando
   getMultiplicando()
   {
      this.multiplicando=Math.round(Math.random()*100);
   }

   //Generar multiplicador
   getMultiplicador()
   {
      this.multiplicador=Math.round(Math.random()*10);
   }

   //Metodo para validar el resultado
  validar(mult:number,multd:number)
  {
     let resultado=mult*multd;
     if(resultado==parseInt(this.resultado))
     {
          this.resultado="";
          this.modal=true;
          this.getMultiplicando();
          this.getMultiplicador();
     }
     else{
      this.resultado="";
     }
    
  }

}
