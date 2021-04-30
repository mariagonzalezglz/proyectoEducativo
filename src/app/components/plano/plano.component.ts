import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import {TablasService,Tablas, Planoejercicios} from '../../servicios/tablas.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-plano',
  templateUrl: './plano.component.html',
  styleUrls: ['./plano.component.scss']
})
export class PlanoComponent implements OnInit {

  planos:Planoejercicios[]=[];
  constructor(private _tablasService:TablasService,
               private _router:Router) { }

 ngOnInit(){
this.planos=this._tablasService.getPlanos();
console.log(this.planos);
  }


  name = "Angular";
  @ViewChild("videoPlayer", { static: false }) videoplayer: ElementRef;
  isPlay: boolean = false;
  
  
  toggleVideo() {
    this.videoplayer.nativeElement.play();
    var myVideo: any = document.getElementById("my_video_1");
    myVideo.width = 320;
  }
}



