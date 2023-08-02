import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'DevSecOps-project';
  firstNumber: number | undefined;
  secondNumber: number | undefined;
  result: string = '';

  constructor(private http: HttpClient) { }

  sumNumbers() {
    const valuesToSum = {
      a: this.firstNumber,
      b: this.secondNumber
    }

    this.http.post('/add', valuesToSum, { responseType: 'text' }).subscribe({
      next: (result) => this.result = result,
      error: (error) => console.log(error)
    });
  }

}
