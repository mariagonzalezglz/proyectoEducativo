import { Component, OnInit } from '@angular/core';
import {TablasService,Tablas} from '../../servicios/tablas.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styles: [
  ]
})
export class TablasComponent implements OnInit{
tablas:Tablas[]=[];
  constructor(private _tablasService:TablasService,
               private _router:Router) { }

 ngOnInit(){
this.tablas=this._tablasService.getTablas();
 }

}


