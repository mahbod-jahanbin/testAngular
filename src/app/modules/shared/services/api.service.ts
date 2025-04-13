import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  apiEndpoint: string = 'http://10.56.2.71:44362/Api/';
  get<T>(path: string, params = {}): Observable<T> {
    return this.http.get<T>(`${this.apiEndpoint}${path}`, {
      params,
    });
  }

  post<T>(path: string, body = {}, responseType = {}): Observable<T> {
    return this.http.post<T>(
      `${this.apiEndpoint}${path}`,
      body,
      responseType
    );
  }

  put<T>(path: string, body = {}): Observable<T> {
    return this.http.put<T>(`${this.apiEndpoint}${path}`, body);
  }

  delete<T>(path: string, body = {}): Observable<T> {
    return this.http.delete<T>(
      `${this.apiEndpoint}${path}`,
      body
    );
  }

  public download<T>(path: string, body: any): Observable<any> {
    return this.http.post<any>(
      `${this.apiEndpoint}${path}`,
      body,
      { responseType: 'blob' as 'json' }
    );
  }

  public postFileData<T>(
    path: string,
    body: FormData
  ): Observable<HttpEvent<T>> {
    return this.http.post<T>(`${this.apiEndpoint}${path}`, body, {
      reportProgress: true,
      observe: 'events',
    });
  }

  public objectToQueryParam(obj: any): string {
    let entity = obj;
    let result: string = '?';
    Object.keys(obj).forEach((property) => {
      result += property + '=' + entity[property] + '&';
    });
    return result.slice(0, -1);
  }
}
