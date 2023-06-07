import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseSevenComponent } from './exercise-seven.component';

describe('ExerciseSevenComponent', () => {
  let component: ExerciseSevenComponent;
  let fixture: ComponentFixture<ExerciseSevenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciseSevenComponent]
    });
    fixture = TestBed.createComponent(ExerciseSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
