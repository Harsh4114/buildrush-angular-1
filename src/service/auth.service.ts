import { Injectable } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
  UserCredential,
} from '@angular/fire/auth';
import { from, Observable, of } from 'rxjs';
import { switchMap, catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth, private router: Router) {} // Inject Router

  SignUp(email: string, username: string, password: string): Observable<UserCredential | null> {
    return from(createUserWithEmailAndPassword(this.auth, email, password)).pipe(
      switchMap((userCredential) => {
        if (userCredential) {
          return from(updateProfile(userCredential.user, { displayName: username })).pipe(
            map(() => userCredential),
            tap(() => {
              // Navigate to /home on success
              this.router.navigate(['/main']);
            }),
            catchError((error) => {
              console.error('Error updating profile:', error);
              return of(null);
            })
          );
        } else {
          return of(null);
        }
      }),
      catchError((error) => {
        console.error('Signup Error:', error);
        return of(null);
      })
    );
  }

  Login(email: string, password: string): Observable<UserCredential | null> {
    return from(signInWithEmailAndPassword(this.auth, email, password)).pipe(
      tap(() => {
        // Navigate to /home on success
        this.router.navigate(['home']);
      }),
      catchError((error) => {
        console.error('Login Error:', error);
        return of(null);
      })
    );
  }

  ForgotPassword(email: string): Observable<void | null> {
    return from(sendPasswordResetEmail(this.auth, email)).pipe(
      catchError((error) => {
        console.error('Password Reset Error:', error);
        return of(null);
      })
    );
  }
}
