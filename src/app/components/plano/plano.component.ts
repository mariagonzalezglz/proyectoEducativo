import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import {TablasService,Tablas, Planoejercicios} from '../../servicios/tablas.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-plano',
  templateUrl: './plano.component.html',
  styleUrls: ['./plano.component.scss']
})
export class PlanoComponent implements OnInit {
  aleato:Number;
  palabra:String; 
  nombre:String;
  respu:String;
  resultado="";
  textodemodal="";
  modal:boolean=false;
  planos:Planoejercicios[]=[];
  constructor(private _tablasService:TablasService,
               private _router:Router) { 
               
               }

 ngOnInit(){
this.planos=this._tablasService.getPlanos();
this.palabra = this.getImagen();

  }


  name = "Angular";
  @ViewChild("videoPlayer", { static: false }) videoplayer: ElementRef;
  isPlay: boolean = false;
  
  
  toggleVideo() {
    this.videoplayer.nativeElement.play();
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.width = 320;
  }
   getImagen() {   
     //Math.floor(Math.random() * (this.planos.length - 1)) + 0
     //Math.floor(Math.random() * (this.planos.length-1));
     console.log("cuantos hay:"+this.planos.length);
     const randomNum = Math.floor(Math.random() * this.planos.length);
    console.log("Aleatorio generado:"+randomNum);
  this.respu=this.planos[randomNum].respuesta;
    this.nombre=this.planos[randomNum].nombre; 
    return this.planos[randomNum].planoimg;
  }

  getRevResp(resp){
    console.log(this.respu+"    "+resp);
    if(resp==""){
        this.textodemodal="Porfavor, no dejes vacia tu respuesta.";
    }else{
   if(this.respu==resp){
     
    console.log("Respuesta correcta!!");
    this.palabra = this.getImagen();
    this.textodemodal="Bien hecho!, tu resultado es correcto,continua con el siguiente";
    this.modal=true;
      return "bien";
   }else{
     this.resultado="";
     this.textodemodal="oops!, algo salio mal, revisa tu resultado";
    console.log("Respuesta Incorrecta!! ");
return "mal";
   }
  }
  }
}



