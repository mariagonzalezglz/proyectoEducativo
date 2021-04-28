import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-seis',
  templateUrl: './tabla-seis.component.html',
  styleUrls: ['./tabla-seis.component.scss']
})
export class TablaSeisComponent implements OnInit {
  tablaSeis: number[]=[];


  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 11; i++) 
    {
         this.tablaSeis[i]=6*i;
    }
  }

}
