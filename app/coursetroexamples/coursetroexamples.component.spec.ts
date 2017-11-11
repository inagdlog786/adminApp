import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursetroexamplesComponent } from './coursetroexamples.component';

describe('CoursetroexamplesComponent', () => {
  let component: CoursetroexamplesComponent;
  let fixture: ComponentFixture<CoursetroexamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursetroexamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursetroexamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
