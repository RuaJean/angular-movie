import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntidadDetailComponent } from './entidad-detail.component';

describe('EntidadDetailComponent', () => {
  let component: EntidadDetailComponent;
  let fixture: ComponentFixture<EntidadDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntidadDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntidadDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
