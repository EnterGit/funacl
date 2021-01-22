import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluarempleadoComponent } from './evaluarempleado.component';

describe('EvaluarempleadoComponent', () => {
  let component: EvaluarempleadoComponent;
  let fixture: ComponentFixture<EvaluarempleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluarempleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluarempleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
