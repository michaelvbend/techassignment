import {Component, OnInit} from '@angular/core';
import {EmiService} from "./emi.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.component.html',
  styleUrl: './emi-calculator.component.css'
})
export class EmiCalculatorComponent implements OnInit{
  emiValue$: Observable<string>;
  constructor(private emiService: EmiService) {
  }

  ngOnInit() {
    this.emiValue$ = this.emiService.emiValue$;
  }


}
