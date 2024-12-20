import { Injectable } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, updateProfile, UserCredential } from "firebase/auth";
import { from, Observable, of } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth = getAuth();

  constructor() {}

  SignUp(email: string, username: string, password: string): Observable<UserCredential | null> {
    return from(createUserWithEmailAndPassword(this.auth, email, password)).pipe(
      switchMap((userCredential) => {
        if (userCredential) {
          return from(updateProfile(userCredential.user, { displayName: username })).pipe(
            map(() => userCredential),
            catchError(error => {
              console.error("Error updating profile:", error);
              // Decide how to handle the error.  Options include:
              // 1. Return null:
              return of(null);
              // 2. Throw the error:  This will propagate the error up the Observable chain.
              // throw error;
            })
          );
        } else {
          return of(null); // Handle case where createUserWithEmailAndPassword failed.
        }
      }),
      catchError(error => {
        console.error("Signup Error:", error);
        return of(null); // Return null or throw error to handle failures before profile update.
      })
    );
  }

  Login(email: string, password: string): Observable<UserCredential | null> {
    return from(signInWithEmailAndPassword(this.auth, email, password)).pipe(
      catchError(error => {
        console.error("Login Error:", error);
        return of(null);
      })
    );
  }

  ForgotPassword(email: string): Observable<void | null> {
    return from(sendPasswordResetEmail(this.auth, email)).pipe(
      catchError(error => {
        console.error("Password Reset Error:", error);
        return of(null);
      })
    );
  }

}