import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-siete',
  templateUrl: './tabla-siete.component.html',
  styleUrls: ['./tabla-siete.component.scss']
})
export class TablaSieteComponent implements OnInit {
  tablaSiete: number[]=[];


  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 11; i++) 
    {
         this.tablaSiete[i]=7*i;
    }
  }
  

}
