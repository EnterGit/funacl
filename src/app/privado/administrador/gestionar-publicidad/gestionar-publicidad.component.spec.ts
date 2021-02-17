import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarPublicidadComponent } from './gestionar-publicidad.component';

describe('GestionarPublicidadComponent', () => {
  let component: GestionarPublicidadComponent;
  let fixture: ComponentFixture<GestionarPublicidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarPublicidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarPublicidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
