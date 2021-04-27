import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-cinco',
  templateUrl: './tabla-cinco.component.html',
  styleUrls: ['./tabla-cinco.component.scss']
})
export class TablaCincoComponent implements OnInit {
  tablaCinco: number[]=[];


  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 11; i++) 
    {
     /* let valores={
        var resul=2*i;
        'resultado':2*i,
         'img': resul/2
      }*/
         this.tablaCinco[i]=5*i;
    }
  }

}
