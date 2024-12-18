import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntidadListComponent } from './entidad-list/entidad-list.component';
import { EntidadDetailComponent } from './entidad-detail/entidad-detail.component';
import { EntidadFormComponent } from './entidad-form/entidad-form.component';

const routes: Routes = [
  { path: '', component: EntidadListComponent },
  { path: 'detalle/:id', component: EntidadDetailComponent },
  { path: 'crear', component: EntidadFormComponent },
  { path: 'editar/:id', component: EntidadFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntidadesRoutingModule { }
