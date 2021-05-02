import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.scss']
})
export class OperacionesComponent implements OnInit {

  multiplicador:number;
  multiplicando:number;

  multiplicadorInter:number;
  multiplicandoInter:number;

  
  multiplicadorAvan:number;
  multiplicandoAvan:number;


  resultado:"";
  resultadoInter="";
  resultadoAvan="";


   modal:boolean=false;
   modalTablas:boolean=false;
   frase:string;
   icono:string;
   color:string;

  constructor() { }

  ngOnInit(): void {
    //Metodos para el nivel basico
    this.getMultiplicandoBasico();
    this.getMultiplicadorBasico();

    //Metodos para el nivel inter
    this.getMultiplicandoInter();
    this.getMultiplicadorInter();

    //Metodos para el nivel avan
    this.getMultiplicandoAvan();
    this.getMultiplicadorAvan();
  }

  //Generar multiplicando
   getMultiplicandoBasico()
   {

    var precision = Math.pow(10, 1);
    var minimo = 10*precision;
    var maximo = 100*precision;
    this.multiplicando= Math.floor(Math.random()*(maximo-minimo+1) + minimo) / precision;
   }

   //Generar multiplicador
   getMultiplicadorBasico()
   {
      this.multiplicador=Math.round(Math.random()*10);
   }

   
  //Generar multiplicando
  getMultiplicandoInter()
  {

   var precision = Math.pow(10, 2);
   var minimo = 10*precision;
   var maximo = 100*precision;
   this.multiplicandoInter= Math.floor(Math.random()*(maximo-minimo+1) + minimo) / precision;
  }

  //Generar multiplicador
  getMultiplicadorInter()
  {
    let max = 10;
    let min = 1;
    this.multiplicadorInter=parseFloat((Math.random() * (max - min) + min).toFixed(1));
    /*var precision = Math.pow(10, 1);
    var minimo = 10*precision;
    var maximo = 100*precision;
    this.multiplicadorInter= Math.floor(Math.random()*(maximo-minimo+1) + minimo) / precision;*/
  }

   
  //Generar multiplicando
  getMultiplicandoAvan()
  {

   var precision = Math.pow(10, 2);
   var minimo = 10*precision;
   var maximo = 100*precision;
   this.multiplicandoAvan= Math.floor(Math.random()*(maximo-minimo+1) + minimo) / precision;
  }

  getMultiplicadorAvan()
  {
    let max = 10;
    let min = 3;
    this.multiplicadorAvan=parseFloat((Math.random() * (max - min) + min).toFixed(2));
    /*var precision = Math.pow(10, 1);
    var minimo = 10*precision;
    var maximo = 100*precision;
    this.multiplicadorInter= Math.floor(Math.random()*(maximo-minimo+1) + minimo) / precision;*/
  }


    
   //Metodo para validar el resultado
  validar(mult:number,multd:number, resul:string)
  {
    //Variable para almacenar el resultado correcto
     let resultado=mult*multd;
     var r=resultado.toFixed(2);

     if(parseFloat(r)==parseFloat(this.resultado.trim()))
     {
          this.resultado="";
          this.modal=true;
          this.getMultiplicandoBasico();
          this.getMultiplicadorBasico();

     }
     else{
      //this.resultado="";
      this.modal=false
     }
    
  }


  //Metodo para validar el resultado
  validarInter(mult:number,multd:number)
  {

    //Variable para almacenar el resultado correcto
     let resultado=mult*multd;
     var r=resultado.toFixed(3);
   
     if(parseFloat(r)==parseFloat(this.resultadoInter.trim()))
     {
          this.resultadoInter="";
          this.modal=true;
          this.getMultiplicandoInter();
          this.getMultiplicadorInter();
     }
     else{
      this.modal=false;
      //this.resultadoInter="";
      
     }
    
  }

  
  //Metodo para validar el resultado
  validarAvan(mult:number,multd:number)
  {

    //Variable para almacenar el resultado correcto
     let resultado=mult*multd;
     var r=resultado.toFixed(4);
     if(parseFloat(r)==parseFloat(this.resultadoAvan.trim()))
     {
          this.resultadoAvan="";
          this.modal=true;
          this.getMultiplicandoAvan();
          this.getMultiplicadorAvan();
     }
     else{
      this.modal=false;
      //this.resultadoAvan="";
      
     }
    
  }

  verTablas(){
    this.modalTablas=true;
  }


}
