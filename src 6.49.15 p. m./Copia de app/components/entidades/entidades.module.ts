import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntidadesRoutingModule } from './entidades-routing.module';

import { EntidadListComponent } from './entidad-list/entidad-list.component';
import { EntidadDetailComponent } from './entidad-detail/entidad-detail.component';
import { EntidadFormComponent } from './entidad-form/entidad-form.component';

@NgModule({
  declarations: [
    EntidadListComponent,
    EntidadDetailComponent,
    EntidadFormComponent
  ],
  imports: [
    CommonModule,
    EntidadesRoutingModule
  ]
})
export class EntidadesModule { }
