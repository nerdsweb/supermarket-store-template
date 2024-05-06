import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenuDialogComponent } from './main-menu-dialog.component';

describe('MainMenuDialogComponent', () => {
  let component: MainMenuDialogComponent;
  let fixture: ComponentFixture<MainMenuDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainMenuDialogComponent]
    });
    fixture = TestBed.createComponent(MainMenuDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
