import { Component, OnInit } from '@angular/core';

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
         this.tablaDos[i]=2*i;
    }
    console.log(this.tablaDos);
  }

}
