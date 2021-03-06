import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject, EMPTY } from 'rxjs';
import { tap, pluck, map } from 'rxjs/operators';

import { User, Post, Ep } from '@app/shared/interfaces';

import { TokenStorage } from './token.storage';

interface AuthResponse {
  token: string;
  user: User;
}


@Injectable({ providedIn: 'root' })
export class AuthService {
  private user$ = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient, private tokenStorage: TokenStorage) {}

  login(email: string, password: string): Observable<User> {
    return this.http
      .post<AuthResponse>('/api/auth/login', { email, password })
      .pipe(
        tap(({ token, user }) => {
          this.setUser(user);
          this.tokenStorage.saveToken(token);
        }),
        pluck('user')
      );
  }

  postnovel(title: string, detail: string, imageTitle: string, uid: string): Observable<Post>{
    return this.http.post('/api/postnovel/create', { title, detail, imageTitle, uid}).pipe(tap(() => {}),pluck('post'));
  }


  delhistory(_id: string){
    return this.http
    .get('/api/postnovel/'+_id).pipe(
      map(res => res)
    )
  }

  delep(_id: string){
    return this.http
    .get('/api/postep/'+_id).pipe(
      map(res => res)
    )
  }


  postep(ep: number, titleep: string, detail: string, titleid: string): Observable<Ep>{
    console.log(ep, titleep, detail, titleid);
    return this.http.post('/api/postep/create', { ep, titleep, detail, titleid}).pipe(tap(() => {}),pluck('ep'));

  }

  getpostnovel(){
    return this.http.get('/api/postnovel/all').pipe(
      map(res => res)
    );
  }

  getpostep(){
    return this.http.get('/api/postep/all').pipe(
      map(res => res)
    );
  }
  getnovel(id: string){
    // console.log(id);
    return this.http.get('/api/postnovel/get/'+ id).pipe(
      map(res => res)
    );
  }

  register(
    fullname: string,
    email: string,
    password: string,
    repeatPassword: string
  ): Observable<User> {
    return this.http
      .post<AuthResponse>('/api/auth/register', {
        fullname,
        email,
        password,
        repeatPassword,
      })
      .pipe(
        pluck('user')
      );
  }

  setUser(user: User | null): void {
    if (user) {
      user.isAdmin = user.roles.includes('admin');
    }

    this.user$.next(user);
    window.user = user;
  }

  getUser(): Observable<User | null> {
    return this.user$.asObservable();
  }

  me(): Observable<User> {
    const token: string | null = this.tokenStorage.getToken();

    if (token === null) {
      return EMPTY;
    }

    return this.http.get<AuthResponse>('/api/auth/me').pipe(
      tap(({ user }) => this.setUser(user)),
      pluck('user')
    );
  }

  signOut(): void {
    this.tokenStorage.signOut();
    this.setUser(null);
    delete window.user;
  }

  getAuthorizationHeaders() {
    const token: string | null = this.tokenStorage.getToken() || '';
    return { Authorization: `Bearer ${token}` };
  }

  /**
   * Let's try to get user's information if he was logged in previously,
   * thus we can ensure that the user is able to access the `/` (home) page.
   */
  checkTheUserOnTheFirstLoad(): Promise<User> {
    return this.me().toPromise();
  }
}
