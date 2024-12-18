import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../../../services/empleados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-empleados',
  templateUrl: './listar-empleados.component.html',
  styleUrls: ['./listar-empleados.component.css'],
})
export class ListarEmpleadosComponent implements OnInit {
  empleados: any[] = [];
  errorMessage: string = '';

  constructor(private empleadoService: EmpleadoService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  obtenerEmpleados(): void {
    this.empleadoService.getAll().subscribe({
      next: (data) => {
        this.empleados = data;
      },
      error: (err) => {
        this.handleError(err);
      },
    });
  }

  verDetalle(id: number): void {
    this.router.navigate([`/empleados/detalle/${id}`]);
  }

  crearEmpleado(): void {
    this.router.navigate(['/empleados/crear']);
  }

  editarEmpleado(id: number): void {
    this.router.navigate([`/empleados/editar/${id}`]);
  }

  eliminarEmpleado(id: number): void {
    if (confirm('¿Está seguro de que desea eliminar este empleado?')) {
      this.empleadoService.delete(id).subscribe({
        next: () => {
          this.obtenerEmpleados();
        },
        error: (err) => {
          this.handleError(err);
        },
      });
    }
  }
  
  irAEntidades(): void {
    this.router.navigate(['/entidades']);
  }

  private handleError(err: any): void {
    if (err.status === 401 || err.status === 403) {
      this.errorMessage = 'No tiene permisos para realizar esta acción.';
    } else {
      this.errorMessage = 'Ocurrió un error. Intente nuevamente.';
    }
  }
}
