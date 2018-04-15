import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdTypeaheadFormat } from './search.component';

describe('SearchComponent', () => {
  let component: NgbdTypeaheadFormat;
  let fixture: ComponentFixture<NgbdTypeaheadFormat>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbdTypeaheadFormat ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdTypeaheadFormat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
