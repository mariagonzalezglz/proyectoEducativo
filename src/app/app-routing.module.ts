import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Modulo de operaciones basicas
import { OperacionesComponent } from './components/operaciones/operaciones.component';
//Modulo de plano cartesiano
import { PlanoComponent } from './components/plano/plano.component';


const routes: Routes = [
  {path: 'operaciones-basicas', component: OperacionesComponent},
  {path: 'plano-cartesiano', component: PlanoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
