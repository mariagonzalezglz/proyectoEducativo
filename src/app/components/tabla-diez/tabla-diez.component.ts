import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-diez',
  templateUrl: './tabla-diez.component.html',
  styleUrls: ['./tabla-diez.component.scss']
})
export class TablaDiezComponent implements OnInit {
  tablaDiez: number[]=[];


  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 11; i++) 
    {
         this.tablaDiez[i]=10*i;
    }
  }
 

}
