import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-diez',
  templateUrl: './tabla-diez.component.html',
  styleUrls: ['./tabla-diez.component.scss']
})
export class TablaDiezComponent implements OnInit {
  tablaDiez: number[]=[];
  tablaResultados: any[] = [];
  tablas:boolean=true;
  btnPracticar:boolean=false;

  
  Bien1:boolean=false;
  Mal1:boolean=false;
  Bien2:boolean=false;
  Mal2:boolean=false;
  Bien3:boolean=false;
  Mal3:boolean=false;
  Bien4:boolean=false;
  Mal4:boolean=false;
  Bien5:boolean=false;
  Mal5:boolean=false;
  Bien6:boolean=false;
  Mal6:boolean=false;
  Bien7:boolean=false;
  Mal7:boolean=false;
  Bien8:boolean=false;
  Mal8:boolean=false;
  Bien9:boolean=false;
  Mal9:boolean=false;
  Bien10:boolean=false;
  Mal10:boolean=false;
  audio = new Audio('assets/audios/tabla10.mp4');
  pausar:boolean=false;
  reprod:boolean=true;


  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 11; i++) 
    {
         this.tablaDiez[i]=10*i;
    }
    this.resultados();
    // Subir a tope de pagina
    this.scrollInicio();

  }

  //Metodo para ver que boton se presiono
  onSubmitReactive(btnId:number, idTabla:number)
  {
    
    switch (idTabla) 
    {
        case 1:
          if(btnId==3)
          {
            this.Bien1=true;
            this.Mal1=false;
          }else{
            this.Bien1=false;
            this.Mal1=true;
          }
            break;
        case 2:
          if(btnId==3)
          {this.Bien2=true;
           this.Mal2=false;
            }else{
              this.Mal2=true;
              this.Bien2=false;
            }
            break;
        case 3:
          if(btnId==3)
          {this.Bien3=true;
           this.Mal3=false;
            }else{
              this.Mal3=true;
              this.Bien3=false;}
            break;
        case 4:
          if(btnId==3)
          {this.Bien4=true;
           this.Mal4=false;
            }else{
              this.Mal4=true;
              this.Bien4=false;}
            break;
        case 5:
          if(btnId==3)
          {this.Bien5=true;
           this.Mal5=false;
            }else{
              this.Mal5=true;
              this.Bien5=false;}
            break;
        case 6:
          if(btnId==3)
          {this.Bien6=true;
           this.Mal6=false;
            }else{
              this.Mal6=true;
              this.Bien6=false;}
            break;
         case 7:
          if(btnId==3)
          {this.Bien7=true;
           this.Mal7=false;
            }else{
              this.Mal7=true;
              this.Bien7=false;}
            break;
          case 8:
            if(btnId==3)
          {this.Bien8=true;
           this.Mal8=false;
            }else{
              this.Mal8=true;
              this.Bien8=false;}
              break;
          case 9:
            if(btnId==3)
          {this.Bien9=true;
           this.Mal9=false;
            }else{
              this.Mal9=true;
              this.Bien9=false;}
              break;
          case 10:
            if(btnId==3)
          {this.Bien10=true;
           this.Mal10=false;
            }else{
              this.Mal10=true;
              this.Bien10=false;}
              break;
        default:
            break;
    }

  }
  
  //Metodo para ocultar/mostrar el panel de tablas
  practicar()
  {
    this.tablas=false;
    this.btnPracticar=true;
  }

  scrollInicio() {
    const scrollToTop = window.setInterval(() => {
      const pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
  }

  
  ngOnDestroy() {
    this.audio.pause();
  }

  reproducir() 
  {
    this.audio.load();
    this.audio.play();
    this.pausar=true;
    this.reprod=false;
  }

pausarMet(){
  this.audio.pause();
  this.reprod=true;
  this.pausar=false;

}

  recordar(){
    this.tablas=true;
    this.btnPracticar=false;
  }
  
  //Metodo para crear los resultados
  resultados()
  {
    //Cada tabla
    for(let i=0; i<11;i++)
    {
       let resul=10*i;
       //Cada boton
       for(let x=0; x<4; x++)
       {
            let valores={
             'resul':resul,
             'boton1':i*8,
             'boton2':i*7
        }
          this.tablaResultados[i]=valores;
       }

    }

  }

 

}
