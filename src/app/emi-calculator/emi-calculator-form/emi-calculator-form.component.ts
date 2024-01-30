import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EmiService} from "../emi.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
@Component({
  selector: 'app-emi-calculator-form',
  templateUrl: './emi-calculator-form.component.html',
  styleUrl: './emi-calculator-form.component.css'
})
export class EmiCalculatorFormComponent implements  OnInit{
  emiCalculatorForm: FormGroup;
  isCalculating: boolean = false;
  error: string = ''
  constructor(private emiService: EmiService) {
  }
  ngOnInit() {
    this.emiCalculatorForm = new FormGroup({
      'loan': new FormControl(null, [Validators.required, Validators.min(1)]),
      'interest': new FormControl(null, [Validators.required, Validators.min(0), Validators.max(100)]),
      'term': new FormControl(null, [Validators.required, Validators.min(1), Validators.max(30)])
    });
  }

  onSubmit() {
    if(this.emiCalculatorForm.valid){
      this.isCalculating = true;
      const postData  = {
        'n': Number(this.emiCalculatorForm.get('loan')?.value),
        'p': Number(this.emiCalculatorForm.get('term')?.value),
        'r': Number(this.emiCalculatorForm.get('interest')?.value)
      }
      this.emiService.calculateEmi(postData).subscribe(response => {
        this.emiService.emiSubject.next(response);
        this.isCalculating = false;
      }, error => {
        this.error = "Something went wrong! Try again later.";
        this.isCalculating = false;
      })
    }

  }

  validateFormControl(element: string): boolean | undefined{
    return this.emiCalculatorForm.get(element)?.invalid && this.emiCalculatorForm.get(element)?.touched;
  }

  resetForm() {
    this.emiService.emiSubject.next('');
    this.emiCalculatorForm.reset();
  }
}
