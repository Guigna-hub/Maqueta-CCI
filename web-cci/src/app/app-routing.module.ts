import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NovedadesComponent } from './pages/novedades/novedades.component';
import { OportunidadesComponent } from './pages/oportunidades/oportunidades.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { TurismoComponent } from './pages/turismo/turismo.component';
import { AsociarseComponent } from './pages/asociarse/asociarse.component';
import { SociosComponent } from './pages/socios/socios.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';

import { VistaErrorComponent } from './pages/vista-error/vista-error.component';

const routes: Routes = [
  { path: 'vInicio', component: HomeComponent },
  { path: 'vNovedades', component: NovedadesComponent },
  { path: 'vOportunidades', component: OportunidadesComponent },
  { path: 'vServicios', component: ServiciosComponent },
  { path: 'vTurismo', component: TurismoComponent },
  { path: 'vError', component: VistaErrorComponent },
  { path: 'vAsociarse', component: AsociarseComponent },
  { path: 'vSocios', component: SociosComponent},
  { path: 'vNosotros', component: NosotrosComponent },
  { path: 'vNoticias', component: NoticiasComponent },

  { path: '', redirectTo: "/vInicio", pathMatch: "full" },
  { path: '**', redirectTo: 'vError' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
