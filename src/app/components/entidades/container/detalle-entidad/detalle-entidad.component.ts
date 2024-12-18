import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntidadService } from '../../../../services/entidad.service';

@Component({
  selector: 'app-detalle-entidad',
  templateUrl: './detalle-entidad.component.html',
  styleUrls: ['./detalle-entidad.component.css'],
})
export class DetalleEntidadComponent implements OnInit {
  entidad: any;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private entidadService: EntidadService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.obtenerEntidad(id);
  }

  obtenerEntidad(id: number): void {
    this.entidadService.getById(id).subscribe({
      next: (data) => (this.entidad = data),
      error: () => (this.errorMessage = 'Error al cargar la entidad.'),
    });
  }

  regresar(): void {
    this.router.navigate(['/entidades']);
  }
}
