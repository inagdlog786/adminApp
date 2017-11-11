import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudpopupComponent } from './crudpopup.component';

describe('CrudpopupComponent', () => {
  let component: CrudpopupComponent;
  let fixture: ComponentFixture<CrudpopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudpopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
