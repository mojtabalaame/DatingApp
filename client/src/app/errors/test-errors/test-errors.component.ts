import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-test-errors',
  imports: [],
  templateUrl: './test-errors.component.html',
  styleUrl: './test-errors.component.css'
})
export class TestErrorsComponent {
  BaseUrl = "https://localhost:5001/api/";
  private http = inject(HttpClient);
  validationErrors: string[] = [];

  get400Error(){
    this.http.get(this.BaseUrl + "Buggy/bad-request").subscribe(
      {
        next: response => console.log(response),
        error: error=> console.log(error)
      }
    )
  };

  get401Error(){
    this.http.get(this.BaseUrl + "Buggy/auth").subscribe(
      {
        next: response => console.log(response),
        error: error=> console.log(error)
      }
    )
  };

  get404Error(){
    this.http.get(this.BaseUrl + "Buggy/not-found").subscribe(
      {
        next: response => console.log(response),
        error: error=> console.log(error)
      }
    )
  };

  get500Error(){
    this.http.get(this.BaseUrl + "Buggy/server-error").subscribe(
      {
        next: response => console.log(response),
        error: error=> console.log(error)
      }
    )
  };

  get400ValidationError(){
    this.http.post(this.BaseUrl + "account/register", {}).subscribe(
      {
        next: response => console.log(response),
        error: error=> {
          console.log(error);
          this.validationErrors = error;
        }
      }
    )
  };
}
