import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoEmpresaComponent } from './acceso-empresa.component';

describe('AccesoEmpresaComponent', () => {
  let component: AccesoEmpresaComponent;
  let fixture: ComponentFixture<AccesoEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesoEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesoEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
