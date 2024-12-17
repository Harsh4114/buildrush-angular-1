// src/app/profile/profile.service.ts
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor() {}

  // Simulating an API call to get the user profile data
  getUserProfile() {
    return of({
      totalSubmissions: 42,
      pointsEarned: 1250,
      badge: { name: 'Gold Developer', icon: '🏆' },
      posts: [
        { id: 1, title: 'Project Task 1', language: 'JavaScript', difficulty: 'Medium', points: 50, description: 'Build a responsive dashboard...', timeLimit: '48 hours' },
        { id: 2, title: 'Project Task 2', language: 'TypeScript', difficulty: 'Hard', points: 100, description: 'Create a dynamic Angular app...', timeLimit: '72 hours' },
        { id: 3, title: 'Project Task 3', language: 'Python', difficulty: 'Easy', points: 30, description: 'Build a REST API using Flask...', timeLimit: '24 hours' },
        { id: 3, title: 'Project Task 4', language: 'Python', difficulty: 'Easy', points: 30, description: 'Build a REST API using Flask...', timeLimit: '24 hours' },
        { id: 3, title: 'Project Task 5', language: 'Python', difficulty: 'Easy', points: 30, description: 'Build a REST API using Flask...', timeLimit: '24 hours' },
        { id: 3, title: 'Project Task 6', language: 'Python', difficulty: 'Easy', points: 30, description: 'Build a REST API using Flask...', timeLimit: '24 hours' },
        { id: 3, title: 'Project Task 7', language: 'Python', difficulty: 'Easy', points: 30, description: 'Build a REST API using Flask...', timeLimit: '24 hours' },
        { id: 3, title: 'Project Task 8', language: 'Python', difficulty: 'Easy', points: 30, description: 'Build a REST API using Flask...', timeLimit: '24 hours' },
        { id: 3, title: 'Project Task 9', language: 'Python', difficulty: 'Easy', points: 30, description: 'Build a REST API using Flask...', timeLimit: '24 hours' },
        { id: 3, title: 'Project Task 10', language: 'Python', difficulty: 'Easy', points: 30, description: 'Build a REST API using Flask...', timeLimit: '24 hours' },
        { id: 3, title: 'Project Task 11', language: 'Python', difficulty: 'Easy', points: 30, description: 'Build a REST API using Flask...', timeLimit: '24 hours' },
      ]
    });
  }

  signOut() {
    // Logic to sign out the user
    console.log('User signed out');
  }

  deleteAccount() {
    // Logic to delete the account
    console.log('Account deleted');
  }
}
