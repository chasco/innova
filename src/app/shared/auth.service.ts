import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'http://ec2-18-224-25-113.us-east-2.compute.amazonaws.com:9091/api/';

  constructor(private http: HttpClient,
              private router: Router) { }


  logIn(user: any) {
    this.http.post(this.baseUrl + 'login', user).
    subscribe((res: any) => {
      localStorage.setItem('token', res.token);
      this.router.navigate(['usuario']);
    });
  }

  getToken() {
    return localStorage.getItem('token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('token');
    return (authToken !== null) ? true : false;
  }

  logOut() {
    let removeToken = localStorage.removeItem('token');
    if (removeToken == null) {
      this.router.navigate(['']);
    }
  }
  
}
