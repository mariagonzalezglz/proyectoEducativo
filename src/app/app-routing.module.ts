import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Modulo de operaciones basicas
import { OperacionesComponent } from './components/operaciones/operaciones.component';
//Modulo de plano cartesiano
import { PlanoComponent } from './components/plano/plano.component';
import {HomeComponent} from './components/home/home.component';
import {TablasComponent} from './components/tablas/tablas.component';
import {TablaCeroComponent} from './components/tabla-cero/tabla-cero.component';
import {TablaUnoComponent} from './components/tabla-uno/tabla-uno.component';
import {TablaDosComponent} from './components/tabla-dos/tabla-dos.component';
import {TablaTresComponent} from './components/tabla-tres/tabla-tres.component';
import {TablaCuatroComponent} from './components/tabla-cuatro/tabla-cuatro.component';
import {TablaCincoComponent} from './components/tabla-cinco/tabla-cinco.component';
import {TablaSeisComponent} from './components/tabla-seis/tabla-seis.component';
import {TablaSieteComponent} from './components/tabla-siete/tabla-siete.component';
import {TablaOchoComponent} from './components/tabla-ocho/tabla-ocho.component';
import {TablaNueveComponent} from './components/tabla-nueve/tabla-nueve.component';
import {TablaDiezComponent} from './components/tabla-diez/tabla-diez.component';
import {DivisionesComponent} from './components/divisiones/divisiones.component';




const APP_ROUTING: Routes=[
  {path: 'operaciones-basicas', component: OperacionesComponent},
  {path: 'plano-cartesiano', component: PlanoComponent},
  {path: 'home', component: HomeComponent},
  {path: 'tablas',component: TablasComponent},
  {path: 'tabla-cero',component: TablaCeroComponent},
  {path: 'tabla-uno',component: TablaUnoComponent},
  {path: 'tabla-dos',component: TablaDosComponent},
  {path: 'tabla-tres',component: TablaTresComponent},
  {path: 'tabla-cuatro',component: TablaCuatroComponent},
  {path: 'tabla-cinco',component: TablaCincoComponent},
  {path: 'tabla-seis',component: TablaSeisComponent},
  {path: 'tabla-siete',component: TablaSieteComponent},
  {path: 'tabla-ocho',component: TablaOchoComponent},
  {path: 'tabla-nueve',component: TablaNueveComponent},
  {path: 'tabla-diez',component: TablaDiezComponent},
  {path: 'divisiones',component: DivisionesComponent},

  {path: '**',pathMatch: 'full',redirectTo: 'home'}];

export const APP_ROUTE=RouterModule.forRoot(APP_ROUTING,{useHash:true});
