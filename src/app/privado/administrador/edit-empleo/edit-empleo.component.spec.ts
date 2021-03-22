import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmpleoComponent } from './edit-empleo.component';

describe('EditEmpleoComponent', () => {
  let component: EditEmpleoComponent;
  let fixture: ComponentFixture<EditEmpleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmpleoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmpleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
