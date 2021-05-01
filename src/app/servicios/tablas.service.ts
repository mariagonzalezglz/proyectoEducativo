import {Injectable} from '@angular/core';
@Injectable()
export class TablasService{
    private tablas:Tablas[]=[
      {
        nombre: "Tabla del 0",
        bio:"Tabla del 0",
        img: "assets/img/0.png",
        aparicion: "1941-11-01",
        casa:"DC"
      }, {
        nombre: "Tabla del 1",
        bio:"Tabla del 1",
        img: "assets/img/1.png",
        aparicion: "1941-11-01",
        casa:"DC"
      },
        {
          nombre: "Tabla del 2",
          bio:"Tabla del 2",
          img: "assets/img/2.png",
          aparicion: "1939-05-01",
          casa:"DC"

        },
        {
          nombre: "Tabla del 3",
          bio:"Tabla del 3",
          img: "assets/img/3.png",
          aparicion: "1964-01-01",
          casa: "Marvel"
        },
        {
          nombre: "Tabla del 4",
          bio:"Tabla del 4",
          img: "assets/img/4.png",
          aparicion: "1962-05-01",
          casa:"Marvel"

        },
        {
          nombre: "Tabla del 5",
          bio:"Tabla del 5",
          img: "assets/img/5.png",
          aparicion: "1940-06-01",
          casa: "DC"

        },
        {
          nombre: "Tabla del 6",
          bio:"Tabla del 6",
          img: "assets/img/6.png",
          aparicion: "1962-08-01",
          casa: "Marvel"

        },
        {
          nombre: "Tabla del 7",
          bio:"Tabla del 7",
          img: "assets/img/7.png",
          aparicion: "1974-11-01",
          casa: "Marvel"

        },
        {
            nombre: "Tabla del 8",
            bio:"Tabla del 8",
            img: "assets/img/8.png",
            aparicion: "1974-11-01",
            casa: "Marvel"

          },
          {
            nombre: "Tabla del 9",
            bio:"Tabla del 9",
            img: "assets/img/9.png",
            aparicion: "1974-11-01",
            casa: "Marvel"

          },
          {
            nombre: "Tabla del 10",
            bio:"Tabla del 10",
            img: "assets/img/10.png",
            aparicion: "1974-11-01",
            casa: "Marvel"

          }
          
      ];

      private plano:Planoejercicios[]=[
        {nombre:"Encuentra el Arbol",
        respuesta:"-4,3",
        planoimg:"assets/img/eje1.png"
        },
        {
          nombre:"Encuentra el Circulo",
          respuesta:"2,6",
          planoimg:"assets/img/2,6.png"
        },
        {
          nombre:"Encuentra el Flor",
          respuesta:"-2,-2",
          planoimg:"assets/img/-2,-2.png"
        },{
          nombre:"Encuentra el Ciervo",
          respuesta:"-2,5",
          planoimg:"assets/img/-2,5.png"
        },{
          nombre:"Encuentra el Flor",
          respuesta:"-4,2",
          planoimg:"assets/img/-4,2.png"
        },{
          nombre:"Encuentra el Rectangulo",
          respuesta:"1,1",
          planoimg:"assets/img/1,1.png"
        },{
          nombre:"Encuentra el Barco",
          respuesta:"3,-4",
          planoimg:"assets/img/3,-4.png"
        },{
          nombre:"Encuentra el Palmera",
          respuesta:"4,1",
          planoimg:"assets/img/4,1.png"
        },{
          nombre:"Encuentra el Submarino",
          respuesta:"5,3",
          planoimg:"assets/img/5,3.png"
        },{
          nombre:"Encuentra el Pentagono",
          respuesta:"6,-5",
          planoimg:"assets/img/6,-5.png"
        }];
    constructor(){
        console.log("Servicio listo!!");
    }

    //hacer un servicio publico para ontener datos de arriba

    getTablas():Tablas[]{
      console.log(this.tablas);
        return this.tablas;
       
    }
    getPlanos():Planoejercicios[]{
     
        return this.plano;
       
    }

    getTabla(idx:string){
      return this.tablas[idx];
    }

    buscarTabla(termino){
      let tablasArr:Tablas[]=[];

      termino=termino.toLowerCase();

      for(let tabla of this.tablas){
        let nombre=tabla.nombre.toLowerCase();
        if(nombre.indexOf(termino)>=0){
          tablasArr.push(tabla)

        }
      }
      return tablasArr;
    }
}


export interface Tablas{
    nombre:string;
    bio:string;
    img:string;
    aparicion:string;
    casa:string;
  }

  export interface Planoejercicios{
    nombre:string;
    respuesta:string;
    planoimg:string;
  }

 