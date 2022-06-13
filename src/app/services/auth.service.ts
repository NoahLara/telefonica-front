import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignIn } from '../utils/models/sign-in.interface';
import { SignInResponse } from '../utils/models/sign-in.response';
import { endpoints } from '../utils/endpoints';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  signIn(user: SignIn): Observable<SignInResponse> {

    return this.http.post<SignInResponse>(endpoints.users, user);

  }

  signOut() {
    localStorage.removeItem('tokenKey');
    this.router.navigate(['/sign-in']);
    alert("Signing out... Good bye!");
  }

  loggedIn() {
    return !!localStorage.getItem('tokenKey');
  }

  getToken(): string | null {
    return localStorage.getItem('tokenKey');
  }


}
