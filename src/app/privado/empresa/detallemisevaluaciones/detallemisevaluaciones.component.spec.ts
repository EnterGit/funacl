import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallemisevaluacionesComponent } from './detallemisevaluaciones.component';

describe('DetallemisevaluacionesComponent', () => {
  let component: DetallemisevaluacionesComponent;
  let fixture: ComponentFixture<DetallemisevaluacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallemisevaluacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallemisevaluacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
