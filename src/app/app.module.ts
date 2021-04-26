import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeaderComponent,
    OperacionesComponent,
    PlanoComponent,
    TablasComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTE
  ],
  providers: [
    TablasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
