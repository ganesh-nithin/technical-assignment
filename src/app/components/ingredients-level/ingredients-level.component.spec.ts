import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsLevelComponent } from './ingredients-level.component';

describe('IngredientsLevelComponent', () => {
  let component: IngredientsLevelComponent;
  let fixture: ComponentFixture<IngredientsLevelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngredientsLevelComponent]
    });
    fixture = TestBed.createComponent(IngredientsLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
