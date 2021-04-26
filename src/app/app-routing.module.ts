import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Modulo de operaciones basicas
import { OperacionesComponent } from './components/operaciones/operaciones.component';
//Modulo de plano cartesiano
import { PlanoComponent } from './components/plano/plano.component';
import {HomeComponent} from './components/home/home.component';
import {TablasComponent} from './components/tablas/tablas.component';


const APP_ROUTING: Routes=[
  {path: 'operaciones-basicas', component: OperacionesComponent},
  {path: 'plano-cartesiano', component: PlanoComponent},
  {path: 'home', component: HomeComponent},
  {path: 'tablas',component: TablasComponent},
  {path: '**',pathMatch: 'full',redirectTo: 'home'}];

export const APP_ROUTE=RouterModule.forRoot(APP_ROUTING,{useHash:true});
