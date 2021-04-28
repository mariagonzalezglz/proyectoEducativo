import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-tres',
  templateUrl: './tabla-tres.component.html',
  styleUrls: ['./tabla-tres.component.scss']
})
export class TablaTresComponent implements OnInit {
  tablaTres: number[]=[];


  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 11; i++) 
    {
     /* let valores={
        var resul=2*i;
        'resultado':2*i,
         'img': resul/2
      }*/
         this.tablaTres[i]=3*i;
    }
  }

}
