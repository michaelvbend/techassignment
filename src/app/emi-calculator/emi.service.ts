import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmiService {
  public emiSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public emiValue$ = this.emiSubject.asObservable();
  constructor(private http: HttpClient) { }

  calculateEmi(postData: {r: number, p: number, n: number}): Observable<string>{
    return this.http.post<number>('http://localhost:8080/calculateEmi', postData).pipe(map(response => {
      return response.toFixed(2);
    }))
  }
}

