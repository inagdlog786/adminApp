import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudAPIComponent } from './crud-api.component';

describe('CrudAPIComponent', () => {
  let component: CrudAPIComponent;
  let fixture: ComponentFixture<CrudAPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudAPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
