import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMatmenuComponent } from './main-matmenu.component';

describe('MainMatmenuComponent', () => {
  let component: MainMatmenuComponent;
  let fixture: ComponentFixture<MainMatmenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainMatmenuComponent]
    });
    fixture = TestBed.createComponent(MainMatmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
