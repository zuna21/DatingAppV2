import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.css'],
})
export class TestErrorComponent implements OnInit {
  private baseUrl: string = 'https://localhost:5001/api';
  validationError: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getAuthError() {
    this.http.get(`${this.baseUrl}/buggy/auth`).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
  }

  getNotFoundError() {
    this.http.get(`${this.baseUrl}/buggy/not-found`).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
  }

  getBadRequestError() {
    this.http.get(`${this.baseUrl}/buggy/bad-request`).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
  }

  getServerError() {
    this.http.get(`${this.baseUrl}/buggy/server-error`).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
  }

  getValidationError() {
    this.http.post(`${this.baseUrl}/account/register`, {}).subscribe({
      next: (response) => console.log(response),
      error: (error) => {
        console.log(error)
        this.validationError = error;
      },
    });
  }
}
