import { Component, OnInit } from '@angular/core';
//import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-tabla-cero',
  templateUrl: './tabla-cero.component.html',
  styleUrls: ['./tabla-cero.component.scss']
})
export class TablaCeroComponent implements OnInit {

  timePeriods = [
    'Bronze age',
    'Iron age',
    'Middle ages',
    'Early modern period',
    'Long nineteenth century'
  ];

 /* drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
  }*/

  tablaCero: number[] = [1,2,3,4,5,6,7,8,9,10];
  tablas:boolean=true;
  btnPracticar:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  practicar()
  {
    console.log("metodo para practicar");
    this.tablas=false;
    this.btnPracticar=true;
  }


}
