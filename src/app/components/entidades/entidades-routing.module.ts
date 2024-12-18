import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarEntidadesComponent } from '../../components/entidades/container/listar-entidades/listar-entidades.component';
import { DetalleEntidadComponent } from '../../components/entidades/container/detalle-entidad/detalle-entidad.component';
import { CrearEditarEntidadComponent } from '../../components/entidades/container/crear-editar-entidad/crear-editar-entidad.component';

const routes: Routes = [
  { path: '', component: ListarEntidadesComponent },
  { path: 'detalle/:id', component: DetalleEntidadComponent },
  { path: 'crear', component: CrearEditarEntidadComponent },
  { path: 'editar/:id', component: CrearEditarEntidadComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntidadesRoutingModule {}
