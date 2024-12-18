import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoListComponent } from './empleado-list/empleado-list.component';
import { EmpleadoDetailComponent } from './empleado-detail/empleado-detail.component';
import { EmpleadoFormComponent } from './empleado-form/empleado-form.component';

const routes: Routes = [
  { path: '', component: EmpleadoListComponent },
  { path: 'detalle/:id', component: EmpleadoDetailComponent },
  { path: 'crear', component: EmpleadoFormComponent },
  { path: 'editar/:id', component: EmpleadoFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadosRoutingModule { }
