import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-cero',
  templateUrl: './tabla-cero.component.html',
  styleUrls: ['./tabla-cero.component.scss']
})
export class TablaCeroComponent implements OnInit {

  tablaCero: number[] = [1,2,3,4,5,6,7,8,9,10];

  constructor() { }

  ngOnInit(): void {
  }


}
