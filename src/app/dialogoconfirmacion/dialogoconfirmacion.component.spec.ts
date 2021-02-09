import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoconfirmacionComponent } from './dialogoconfirmacion.component';

describe('DialogoconfirmacionComponent', () => {
  let component: DialogoconfirmacionComponent;
  let fixture: ComponentFixture<DialogoconfirmacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogoconfirmacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoconfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
