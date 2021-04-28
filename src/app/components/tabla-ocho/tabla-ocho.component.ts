import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-ocho',
  templateUrl: './tabla-ocho.component.html',
  styleUrls: ['./tabla-ocho.component.scss']
})
export class TablaOchoComponent implements OnInit {
  tablaOcho: number[]=[];


  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 11; i++) 
    {
         this.tablaOcho[i]=8*i;
    }
  }

}
