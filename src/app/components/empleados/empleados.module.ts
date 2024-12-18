import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { EmpleadosRoutingModule } from './empleados-routing.module';
import { EmpleadosComponent } from './empleados.component';
import { ListarEmpleadosComponent } from './container/listar-empleados/listar-empleados.component';
import { DetalleEmpleadoComponent } from './container/detalle-empleado/detalle-empleado.component';
import { CrearEditarEmpleadoComponent } from './container/crear-editar-empleado/crear-editar-empleado.component';


@NgModule({
  declarations: [
    EmpleadosComponent,
    ListarEmpleadosComponent,
    DetalleEmpleadoComponent,
    CrearEditarEmpleadoComponent
  ],
  imports: [
    CommonModule,
    EmpleadosRoutingModule,
    FormsModule
  ]
})
export class EmpleadosModule { }
