import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EndpointService {
  constructor(private http: HttpClient) {}

  public async getTodo(): Promise<any> {
    return await this.http
      .get(`https://jsonplaceholder.typicode.com/todos/2`)
      .pipe(
        map((result) => result)
      ).toPromise();
  }
}
