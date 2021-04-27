import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-uno',
  templateUrl: './tabla-uno.component.html',
  styleUrls: ['./tabla-uno.component.scss']
})
export class TablaUnoComponent implements OnInit {

  tablaUno: number[]=[];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 11; i++) 
    {
         this.tablaUno[i]=1*i;
    }

  }

}

