import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorizarFunaComponent } from './autorizar-funa.component';

describe('AutorizarFunaComponent', () => {
  let component: AutorizarFunaComponent;
  let fixture: ComponentFixture<AutorizarFunaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutorizarFunaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorizarFunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
