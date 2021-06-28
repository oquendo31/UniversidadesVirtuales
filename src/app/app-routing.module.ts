import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactenosComponent } from './componentes/pages/contactenos/contactenos.component';
import { CuestionarioComponent } from './componentes/pages/cuestionario/cuestionario.component';
import { DirectorioComponent } from './componentes/pages/directorio/directorio.component';
import { HomeComponent } from './componentes/pages/home/home.component';
import { LogoutComponent } from './componentes/pages/logout/logout.component';
import { SugerenciasComponent } from './componentes/pages/sugerencias/sugerencias.component';
import { UniversidadesVirtualesComponent } from './componentes/pages/universidades-virtuales/universidades-virtuales.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'logout',
    component: LogoutComponent

  },
  {
    path: 'universidadesVirtuales',
    component: UniversidadesVirtualesComponent

  },
  {
    path: 'cuestionario',
    component: CuestionarioComponent

  },
  {
    path: 'directory',
    component: DirectorioComponent

  },
  {
    path: 'sugerencias',
    component: SugerenciasComponent

  },
  {
    path: 'contactenos',
    component: ContactenosComponent

  },
  {
    path: '**',
    redirectTo: ''

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
