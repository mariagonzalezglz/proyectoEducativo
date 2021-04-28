import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-cuatro',
  templateUrl: './tabla-cuatro.component.html',
  styleUrls: ['./tabla-cuatro.component.scss']
})
export class TablaCuatroComponent implements OnInit {
  tablaCuatro: number[]=[];


  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 11; i++) 
    {
     /* let valores={
        var resul=2*i;
        'resultado':2*i,
         'img': resul/2
      }*/
         this.tablaCuatro[i]=4*i;
    }
  }

}
