import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEditarEmpleadoComponent } from './crear-editar-empleado.component';

describe('CrearEditarEmpleadoComponent', () => {
  let component: CrearEditarEmpleadoComponent;
  let fixture: ComponentFixture<CrearEditarEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearEditarEmpleadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearEditarEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
