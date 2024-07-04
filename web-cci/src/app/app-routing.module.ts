import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NovedadesComponent } from './pages/novedades/novedades.component';
import { OportunidadesComponent } from './pages/oportunidades/oportunidades.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { VistaErrorComponent } from './pages/vista-error/vista-error.component';

const routes: Routes = [
  { path: 'vInicio', component: HomeComponent },
  { path: 'vNovedades', component: NovedadesComponent },
  { path: 'vOportunidades', component: OportunidadesComponent },
  { path: 'vServicios', component: ServiciosComponent },
  { path: 'vError', component: VistaErrorComponent },
  { path: '', redirectTo: "/home", pathMatch: "full" },
  { path: '**', redirectTo: 'vError' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
