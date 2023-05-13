import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { MiembrosComponent } from './components/miembros/miembros.component';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { TecnologiaComponent } from './components/tecnologia/tecnologia.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AcercaDeComponent,
    QuienesSomosComponent,
    MiembrosComponent,
    ActividadesComponent,
    HistoriaComponent,
    TecnologiaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
