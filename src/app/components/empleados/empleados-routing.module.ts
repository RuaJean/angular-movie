import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarEmpleadosComponent } from '../../components/empleados/container/listar-empleados/listar-empleados.component';
import { CrearEditarEmpleadoComponent } from '../../components/empleados/container/crear-editar-empleado/crear-editar-empleado.component';
import { DetalleEmpleadoComponent } from '../../components/empleados/container/detalle-empleado/detalle-empleado.component';

const routes: Routes = [
  { path: '', component: ListarEmpleadosComponent },
  { path: 'crear', component: CrearEditarEmpleadoComponent },
  { path: 'editar/:id', component: CrearEditarEmpleadoComponent },
  { path: 'detalle/:id', component: DetalleEmpleadoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpleadosRoutingModule {}
