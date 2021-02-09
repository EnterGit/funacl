import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferirempleadoComponent } from './referirempleado.component';

describe('ReferirempleadoComponent', () => {
  let component: ReferirempleadoComponent;
  let fixture: ComponentFixture<ReferirempleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferirempleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferirempleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
