import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignIn } from '../utils/models/sign-in.interface';
import { SignInResponse } from '../utils/models/sign-in.response';
import { endpoints } from '../utils/endpoints';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signIn(user: SignIn): Observable<SignInResponse> {

    return this.http.post<SignInResponse>(endpoints.users, user);

  }


}
