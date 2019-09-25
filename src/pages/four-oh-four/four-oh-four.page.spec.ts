import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourOhFourPage } from './four-oh-four.page';

describe('FourOhFourPage', () => {
  let component: FourOhFourPage;
  let fixture: ComponentFixture<FourOhFourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourOhFourPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourOhFourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
