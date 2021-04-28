import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-nueve',
  templateUrl: './tabla-nueve.component.html',
  styleUrls: ['./tabla-nueve.component.scss']
})
export class TablaNueveComponent implements OnInit {
  tablaNueve: number[]=[];


  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 11; i++) 
    {
         this.tablaNueve[i]=9*i;
    }
  }

}
