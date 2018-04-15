import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuThemeElementComponent } from './menu-theme-element.component';

describe('MenuThemeElementComponent', () => {
  let component: MenuThemeElementComponent;
  let fixture: ComponentFixture<MenuThemeElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuThemeElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuThemeElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
