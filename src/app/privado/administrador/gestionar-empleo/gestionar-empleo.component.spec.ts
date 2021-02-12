import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarEmpleoComponent } from './gestionar-empleo.component';

describe('GestionarEmpleoComponent', () => {
  let component: GestionarEmpleoComponent;
  let fixture: ComponentFixture<GestionarEmpleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarEmpleoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarEmpleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
