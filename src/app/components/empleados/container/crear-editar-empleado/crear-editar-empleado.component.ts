import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoService } from '../../../../services/empleados.service';

@Component({
  selector: 'app-crear-editar-empleado',
  templateUrl: './crear-editar-empleado.component.html',
  styleUrls: ['./crear-editar-empleado.component.css'],
})
export class CrearEditarEmpleadoComponent implements OnInit {
  empleado: any = { nombre: '', cargo: '', entidadId: null };
  isEdit: boolean = false;
  errorMessage: string = '';

  constructor(
    private empleadoService: EmpleadoService,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEdit = true;
      this.obtenerEmpleado(id);
    }
  }

  obtenerEmpleado(id: number): void {
    this.empleadoService.getById(id).subscribe({
      next: (data) => {
        this.empleado = {
          nombre: data.nombre,
          cargo: data.cargo,
          entidadId: data.entidadId,
        };
      },
      error: (err) => this.handleError(err),
    });
  }

  guardarEmpleado(): void {
    if (this.isEdit) {
      // Realizar la solicitud PUT para actualizar el empleado
      this.empleadoService.update(this.route.snapshot.params['id'], this.empleado).subscribe({
        next: () => this.router.navigate(['/empleados']),
        error: (err) => this.handleError(err),
      });
    } else {
      // Realizar la solicitud POST para crear el empleado
      this.empleadoService.create(this.empleado).subscribe({
        next: () => this.router.navigate(['/empleados']),
        error: (err) => this.handleError(err),
      });
    }
  }

  private handleError(err: any): void {
    if (err.status === 401 || err.status === 403) {
      this.errorMessage = 'No tiene permisos para realizar esta acción.';
    } else {
      this.errorMessage = 'Ocurrió un error. Intente nuevamente.';
    }
  }
}
