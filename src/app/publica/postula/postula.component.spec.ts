import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulaComponent } from './postula.component';

describe('PostulaComponent', () => {
  let component: PostulaComponent;
  let fixture: ComponentFixture<PostulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
