import { Component, OnInit } from '@angular/core';
import { TablasMul } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tabla-dos',
  templateUrl: './tabla-dos.component.html',
  styleUrls: ['./tabla-dos.component.scss']
})
export class TablaDosComponent implements OnInit {
  tablaDos: number[]=[];


  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 11; i++) 
    {
     /* let valores={
        var resul=2*i;
        'resultado':2*i,
         'img': resul/2
      }*/
         this.tablaDos[i]=2*i;
    }
  }

}

