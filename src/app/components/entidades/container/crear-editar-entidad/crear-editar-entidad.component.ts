import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntidadService } from '../../../../services/entidad.service';

@Component({
  selector: 'app-crear-editar-entidad',
  templateUrl: './crear-editar-entidad.component.html',
  styleUrls: ['./crear-editar-entidad.component.css'],
})
export class CrearEditarEntidadComponent implements OnInit {
  entidad: any = { id: null, nombre: '', descripcion: '' };
  isEdit: boolean = false;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private entidadService: EntidadService,
    public router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEdit = true;
      this.obtenerEntidad(id);
    }
  }

  obtenerEntidad(id: number): void {
    this.entidadService.getById(id).subscribe({
      next: (data) => (this.entidad = data),
      error: () => (this.errorMessage = 'Error al cargar la entidad.'),
    });
  }

  guardarEntidad(): void {
    if (this.isEdit) {
      this.entidadService.update(this.entidad.id, this.entidad).subscribe({
        next: () => this.router.navigate(['/entidades']),
        error: () => (this.errorMessage = 'Error al actualizar la entidad.'),
      });
    } else {
      this.entidadService.create(this.entidad).subscribe({
        next: () => this.router.navigate(['/entidades']),
        error: () => (this.errorMessage = 'Error al crear la entidad.'),
      });
    }
  }
}
