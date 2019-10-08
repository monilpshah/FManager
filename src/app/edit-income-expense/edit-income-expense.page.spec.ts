import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIncomeExpensePage } from './edit-income-expense.page';

describe('EditIncomeExpensePage', () => {
  let component: EditIncomeExpensePage;
  let fixture: ComponentFixture<EditIncomeExpensePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditIncomeExpensePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditIncomeExpensePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
