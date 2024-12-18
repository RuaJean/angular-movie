import { Component, OnInit } from '@angular/core';
import { EntidadService } from '../../../../services/entidad.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-entidades',
  templateUrl: './listar-entidades.component.html',
  styleUrls: ['./listar-entidades.component.css'],
})
export class ListarEntidadesComponent implements OnInit {
  entidades: any[] = [];
  errorMessage: string = '';

  constructor(private entidadService: EntidadService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerEntidades();
  }

  obtenerEntidades(): void {
    this.entidadService.getAll().subscribe({
      next: (data) => (this.entidades = data),
      error: () => (this.errorMessage = 'Error al cargar las entidades.'),
    });
  }

  eliminarEntidad(id: number): void {
    if (confirm('¿Está seguro de que desea eliminar esta entidad?')) {
      this.entidadService.delete(id).subscribe(() => this.obtenerEntidades());
    }
  }

  irACrear(): void {
    this.router.navigate(['/entidades/crear']);
  }

  irADetalle(id: number): void {
    this.router.navigate([`/entidades/detalle/${id}`]);
  }
  irAEditar(id: number): void {
    this.router.navigate([`/entidades/editar/${id}`]);
  }
  irEmpleados(): void {
    this.router.navigate(['/empleados']);
  }

}
