import {Injectable} from '@angular/core';
@Injectable()
export class TablasService{
    private tablas:Tablas[]=[
      {
        nombre: "Tabla del 0",
        bio:"Tabla del 0",
        img: "assets/img/aquaman.png",
        aparicion: "1941-11-01",
        casa:"DC"
      }, {
        nombre: "Tabla del 1",
        bio:"Tabla del 1",
        img: "assets/img/aquaman.png",
        aparicion: "1941-11-01",
        casa:"DC"
      },
        {
          nombre: "Tabla del 2",
          bio:"Tabla del 2",
          img: "assets/img/batman.png",
          aparicion: "1939-05-01",
          casa:"DC"

        },
        {
          nombre: "Tabla del 3",
          bio:"Tabla del 3",
          img: "assets/img/daredevil.png",
          aparicion: "1964-01-01",
          casa: "Marvel"
        },
        {
          nombre: "Tabla del 4",
          bio:"Tabla del 4",
          img: "assets/img/hulk.png",
          aparicion: "1962-05-01",
          casa:"Marvel"

        },
        {
          nombre: "Tabla del 5",
          bio:"Tabla del 5",
          img: "assets/img/linterna-verde.png",
          aparicion: "1940-06-01",
          casa: "DC"

        },
        {
          nombre: "Tabla del 6",
          bio:"Tabla del 6",
          img: "assets/img/spiderman.png",
          aparicion: "1962-08-01",
          casa: "Marvel"

        },
        {
          nombre: "Tabla del 7",
          bio:"Tabla del 7",
          img: "assets/img/wolverine.png",
          aparicion: "1974-11-01",
          casa: "Marvel"

        },
        {
            nombre: "Tabla del 8",
            bio:"Tabla del 8",
            img: "assets/img/wolverine.png",
            aparicion: "1974-11-01",
            casa: "Marvel"

          },
          {
            nombre: "Tabla del 9",
            bio:"Tabla del 9",
            img: "assets/img/wolverine.png",
            aparicion: "1974-11-01",
            casa: "Marvel"

          }
          
      ];
    constructor(){
        console.log("Servicio listo!!");
    }

    //hacer un servicio publico para ontener datos de arriba

    getTablas():Tablas[]{
        return this.tablas;
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