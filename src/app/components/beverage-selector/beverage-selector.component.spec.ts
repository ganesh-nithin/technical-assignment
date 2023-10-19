import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeverageSelectorComponent } from './beverage-selector.component';

describe('BeverageSelectorComponent', () => {
  let component: BeverageSelectorComponent;
  let fixture: ComponentFixture<BeverageSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeverageSelectorComponent]
    });
    fixture = TestBed.createComponent(BeverageSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
