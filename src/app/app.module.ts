import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

//Servicios
import {TablasService} from './servicios/tablas.service';
import { APP_ROUTE } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { OperacionesComponent } from './components/operaciones/operaciones.component';
import { PlanoComponent } from './components/plano/plano.component';
import { TablasComponent } from './components/tablas/tablas.component';
import { TablaCeroComponent } from './components/tabla-cero/tabla-cero.component';
import { TablaUnoComponent } from './components/tabla-uno/tabla-uno.component';
import { TablaDosComponent } from './components/tabla-dos/tabla-dos.component';
import { TablaTresComponent } from './components/tabla-tres/tabla-tres.component';
import { TablaCuatroComponent } from './components/tabla-cuatro/tabla-cuatro.component';
import { TablaCincoComponent } from './components/tabla-cinco/tabla-cinco.component';
import { TablaSeisComponent } from './components/tabla-seis/tabla-seis.component';
import { TablaSieteComponent } from './components/tabla-siete/tabla-siete.component';
import { TablaOchoComponent } from './components/tabla-ocho/tabla-ocho.component';
import { TablaNueveComponent } from './components/tabla-nueve/tabla-nueve.component';
import { TablaDiezComponent } from './components/tabla-diez/tabla-diez.component';
import { DivisionesComponent } from './components/divisiones/divisiones.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeaderComponent,
    OperacionesComponent,
    PlanoComponent,
    TablasComponent,
    TablaCeroComponent,
    TablaUnoComponent,
    TablaDosComponent,
    TablaTresComponent,
    TablaCuatroComponent,
    TablaCincoComponent,
    TablaSeisComponent,
    TablaSieteComponent,
    TablaOchoComponent,
    TablaNueveComponent,
    TablaDiezComponent,
    DivisionesComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTE,
    FormsModule
  ],
  providers: [
    TablasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
