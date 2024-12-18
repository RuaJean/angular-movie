import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: 'login', 
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) 
  },
  { 
    path: 'empleados', 
    loadChildren: () => import('./components/empleados/empleados.module').then(m => m.EmpleadosModule) 
  },
  { 
    path: 'entidades', 
    loadChildren: () => import('./components/entidades/entidades.module').then(m => m.EntidadesModule) 
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
