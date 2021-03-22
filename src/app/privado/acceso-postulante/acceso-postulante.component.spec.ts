import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoPostulanteComponent } from './acceso-postulante.component';

describe('AccesoPostulanteComponent', () => {
  let component: AccesoPostulanteComponent;
  let fixture: ComponentFixture<AccesoPostulanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesoPostulanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesoPostulanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
