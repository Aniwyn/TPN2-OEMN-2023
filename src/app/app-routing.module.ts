import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { MiembrosComponent } from './components/miembros/miembros.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';


const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: 'actividades', component: ActividadesComponent },
  { path: 'historia', component: HistoriaComponent },
  { path: 'miembros', component: MiembrosComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: '', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
