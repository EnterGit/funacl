import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarempleadoComponent } from './consultarempleado.component';

describe('ConsultarempleadoComponent', () => {
  let component: ConsultarempleadoComponent;
  let fixture: ComponentFixture<ConsultarempleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarempleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarempleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
