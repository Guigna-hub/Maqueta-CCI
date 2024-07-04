import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { OportunidadesComponent } from './pages/oportunidades/oportunidades.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { NovedadesComponent } from './pages/novedades/novedades.component';
import { VistaErrorComponent } from './pages/vista-error/vista-error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    OportunidadesComponent,
    ServiciosComponent,
    NovedadesComponent,
    VistaErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
