import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoService } from '../../../../services/empleados.service';

@Component({
  selector: 'app-detalle-empleado',
  templateUrl: './detalle-empleado.component.html',
  styleUrls: ['./detalle-empleado.component.css'],
})
export class DetalleEmpleadoComponent implements OnInit {
  empleado: any;

  constructor(
    private route: ActivatedRoute,
    private empleadoService: EmpleadoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.obtenerEmpleado(id);
  }

  obtenerEmpleado(id: number): void {
    this.empleadoService.getById(id).subscribe((data) => {
      this.empleado = data;
    });
  }

  regresar(): void {
    this.router.navigate(['/empleados']);
  }
}
