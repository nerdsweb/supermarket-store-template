import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavbarMennuComponent } from './main-navbar-mennu.component';

describe('MainNavbarMennuComponent', () => {
  let component: MainNavbarMennuComponent;
  let fixture: ComponentFixture<MainNavbarMennuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainNavbarMennuComponent]
    });
    fixture = TestBed.createComponent(MainNavbarMennuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
