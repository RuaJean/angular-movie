import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEditarEntidadComponent } from './crear-editar-entidad.component';

describe('CrearEditarEntidadComponent', () => {
  let component: CrearEditarEntidadComponent;
  let fixture: ComponentFixture<CrearEditarEntidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearEditarEntidadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearEditarEntidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
