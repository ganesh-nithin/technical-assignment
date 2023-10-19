import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeverageProcessorComponent } from './beverage-processor.component';

describe('BeverageProcessorComponent', () => {
  let component: BeverageProcessorComponent;
  let fixture: ComponentFixture<BeverageProcessorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeverageProcessorComponent]
    });
    fixture = TestBed.createComponent(BeverageProcessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
