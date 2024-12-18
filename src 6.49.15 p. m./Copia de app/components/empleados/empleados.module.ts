import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadosRoutingModule } from './empleados-routing.module';

import { EmpleadoListComponent } from './empleado-list/empleado-list.component';
import { EmpleadoDetailComponent } from './empleado-detail/empleado-detail.component';
import { EmpleadoFormComponent } from './empleado-form/empleado-form.component';

@NgModule({
  declarations: [
    EmpleadoListComponent,
    EmpleadoDetailComponent,
    EmpleadoFormComponent
  ],
  imports: [
    CommonModule,
    EmpleadosRoutingModule
  ]
})
export class EmpleadosModule { }
