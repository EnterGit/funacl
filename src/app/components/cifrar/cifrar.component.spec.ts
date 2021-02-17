import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CifrarComponent } from './cifrar.component';

describe('CifrarComponent', () => {
  let component: CifrarComponent;
  let fixture: ComponentFixture<CifrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CifrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CifrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
