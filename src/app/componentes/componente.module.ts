import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactenosComponent } from './pages/contactenos/contactenos.component';
import { CuestionarioComponent } from './pages/cuestionario/cuestionario.component';
import { CuestionariodirectorioComponent } from './pages/cuestionariodirectorio/cuestionariodirectorio.component';
import { HomeComponent } from './pages/home/home.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { SugerenciasComponent } from './pages/sugerencias/sugerencias.component';
import { UniversidadesVirtualesComponent } from './pages/universidades-virtuales/universidades-virtuales.component';
import { DirectorioComponent } from './pages/directorio/directorio.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations:
    [
      ContactenosComponent,
      CuestionarioComponent,
      CuestionariodirectorioComponent,
      HomeComponent,
      LogoutComponent,
      SugerenciasComponent,
      UniversidadesVirtualesComponent,
      DirectorioComponent
    ],
  exports: [
    ContactenosComponent,
    CuestionarioComponent,
    CuestionariodirectorioComponent,
    HomeComponent,
    LogoutComponent,
    SugerenciasComponent,
    UniversidadesVirtualesComponent,
    DirectorioComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ComponenteModule { }
