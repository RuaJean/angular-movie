import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { EntidadesRoutingModule } from './entidades-routing.module';
import { EntidadesComponent } from './entidades.component';
import { ListarEntidadesComponent } from './container/listar-entidades/listar-entidades.component';
import { DetalleEntidadComponent } from './container/detalle-entidad/detalle-entidad.component';
import { CrearEditarEntidadComponent } from './container/crear-editar-entidad/crear-editar-entidad.component';


@NgModule({
  declarations: [
    EntidadesComponent,
    ListarEntidadesComponent,
    DetalleEntidadComponent,
    CrearEditarEntidadComponent
  ],
  imports: [
    CommonModule,
    EntidadesRoutingModule,
    FormsModule
  ]
})
export class EntidadesModule { }
 