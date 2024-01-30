import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmiCalculatorFormComponent } from './emi-calculator-form.component';

describe('EmiCalculatorFormComponent', () => {
  let component: EmiCalculatorFormComponent;
  let fixture: ComponentFixture<EmiCalculatorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmiCalculatorFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmiCalculatorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
