import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet></router-outlet>`
})
export class App { }

const projectId = "buildrush-in";
const appId = "1:582649798068:web:357c094f10ba974f13a6e1";
const storageBucket = "buildrush-in.firebasestorage.app";
const apiKey = "AIzaSyDiCg0C52cTiImlZ6lvn7-6I-yX_vMihg8"; // Note:  This API key looks suspiciously short.  Ensure it's the full key.
const authDomain = "buildrush-in.firebaseapp.com";
const messagingSenderId = "582649798068";
const measurementId = "G-TELGCQ6W2W";

const firebaseConfig = {
  projectId,
  appId,
  storageBucket,
  apiKey,
  authDomain,
  messagingSenderId,
  measurementId,
};

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
});


