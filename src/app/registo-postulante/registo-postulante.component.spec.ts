import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistoPostulanteComponent } from './registo-postulante.component';

describe('RegistoPostulanteComponent', () => {
  let component: RegistoPostulanteComponent;
  let fixture: ComponentFixture<RegistoPostulanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistoPostulanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistoPostulanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
