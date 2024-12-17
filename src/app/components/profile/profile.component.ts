// // src/app/profile/profile.component.ts
// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';
// import { NavbarComponent } from '../navbar/navbar.component';
// import { ProfileService } from './profile.service';

// @Component({
//   selector: 'app-profile',
//   standalone: true,
//   imports: [CommonModule, RouterModule, NavbarComponent],
//   template: `
//     <app-navbar [isLoggedIn]="true"></app-navbar>
//     <div class="profile-container">
//       <div class="profile-sidebar">
//         <div class="stats-section">
//           <h3>Statistics</h3>
//           <div class="stat-item">
//             <span>Total Submissions</span>
//             <span>{{ userProfile?.totalSubmissions }}</span>
//           </div>
//           <div class="stat-item">
//             <span>Points Earned</span>
//             <span>{{ userProfile?.pointsEarned }}</span>
//           </div>
//         </div>

//         <div class="badge-section">
//           <h3>Current Badge</h3>
//           <div class="badge">
//             <div class="badge-icon">{{ userProfile?.badge.icon }}</div>
//             <span>{{ userProfile?.badge.name }}</span>
//           </div>
//           <button class="view-roadmap">View Badge Roadmap</button>
//         </div>

//         <div class="actions-section">
//           <button class="action-btn" (click)="signOut()">Sign Out</button>
//           <button class="action-btn settings">Settings</button>
//           <button class="action-btn danger" (click)="deleteAccount()">Delete Account</button>
//         </div>
//       </div>

//       <div class="profile-content">
//         <div class="content-header">
//           <h2>My Posts</h2>
//           <button class="new-post-btn" routerLink="/posts/new">Create New Post</button>
//         </div>

//         <div class="posts-grid">
//           <div class="post-card" *ngFor="let post of userProfile?.posts">
//             <h3>{{ post.title }}</h3>
//             <div class="post-meta">
//               <span class="language">{{ post.language }}</span>
//               <span class="difficulty">{{ post.difficulty }}</span>
//               <span class="points">{{ post.points }} pts</span>
//             </div>
//             <p class="description">
//               {{ post.description }}
//             </p>
//             <div class="post-footer">
//               <span class="time-limit">{{ post.timeLimit }}</span>
//               <button class="edit-btn">Edit</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   `,
//   styles: [`
//     .profile-container {
//       display: flex;
//       margin: 20px;
//     }
//     .profile-sidebar {
//       width: 300px;
//       padding: 20px;
//       background-color: #f4f4f9;
//       box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//     }
//     .profile-content {
//       flex: 1;
//       padding: 20px;
//     }
//     .stats-section, .badge-section {
//       margin-bottom: 20px;
//     }
//     .stat-item, .badge {
//       display: flex;
//       justify-content: space-between;
//       margin-bottom: 10px;
//     }
//     .actions-section {
//       display: flex;
//       flex-direction: column;
//     }
//     .action-btn {
//       background-color: #007bff;
//       color: white;
//       border: none;
//       padding: 10px;
//       margin-bottom: 10px;
//       cursor: pointer;
//     }
//     .action-btn.danger {
//       background-color: #e63946;
//     }
//     .content-header {
//       display: flex;
//       justify-content: space-between;
//       margin-bottom: 20px;
//     }
//     .posts-grid {
//       display: grid;
//       grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//       gap: 20px;
//     }
//     .post-card {
//       padding: 20px;
//       background-color: #fff;
//       box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//     }
//     .post-meta {
//       display: flex;
//       justify-content: space-between;
//       margin-bottom: 10px;
//     }
//     .description {
//       margin-bottom: 10px;
//     }
//     .edit-btn {
//       background-color: #ffbf00;
//       color: white;
//       border: none;
//       padding: 8px 15px;
//       cursor: pointer;
//     }
//   `]
// })
// export class ProfileComponent implements OnInit {
//   userProfile: any;

//   constructor(private profileService: ProfileService) {}

//   ngOnInit(): void {
//     // Fetch user profile data on initialization
//     this.profileService.getUserProfile().subscribe(data => {
//       this.userProfile = data;
//     });
//   }

//   signOut() {
//     this.profileService.signOut();
//     // Additional logic to handle sign-out
//   }

//   deleteAccount() {
//     if (confirm('Are you sure you want to delete your account?')) {
//       this.profileService.deleteAccount();
//       // Logic for handling the deletion
//     }
//   }
// }
// // src/app/profile/profile.component.ts
// // import { Component, OnInit } from '@angular/core';
// // import { CommonModule } from '@angular/common';
// // import { RouterModule } from '@angular/router';
// // import { NavbarComponent } from '../navbar/navbar.component';
// // import { ProfileService } from './profile.service';

// // @Component({
// //   selector: 'app-profile',
// //   standalone: true,
// //   imports: [CommonModule, RouterModule, NavbarComponent],
// //   template: `
// //     <app-navbar [isLoggedIn]="true"></app-navbar>
// //     <div class="profile-container">
// //       <div class="profile-sidebar">
// //         <div class="stats-section">
// //           <h3>Statistics</h3>
// //           <div class="stat-item">
// //             <span>Total Submissions</span>
// //             <span>{{ userProfile?.totalSubmissions }}</span>
// //           </div>
// //           <div class="stat-item">
// //             <span>Points Earned</span>
// //             <span>{{ userProfile?.pointsEarned }}</span>
// //           </div>
// //         </div>

// //         <div class="badge-section">
// //           <h3>Current Badge</h3>
// //           <div class="badge">
// //             <div class="badge-icon">{{ userProfile?.badge.icon }}</div>
// //             <span>{{ userProfile?.badge.name }}</span>
// //           </div>
// //           <button class="view-roadmap">View Badge Roadmap</button>
// //         </div>

// //         <div class="actions-section">
// //           <button class="action-btn" (click)="signOut()">Sign Out</button>
// //           <button class="action-btn settings">Settings</button>
// //           <button class="action-btn danger" (click)="deleteAccount()">Delete Account</button>
// //         </div>
// //       </div>

// //       <div class="profile-content">
// //         <div class="content-header">
// //           <h2>My Posts</h2>
// //           <button class="new-post-btn" routerLink="/posts/new">Create New Post</button>
// //         </div>

// //         <div class="posts-grid">
// //           <div class="post-card" *ngFor="let post of userProfile?.posts">
// //             <h3>{{ post.title }}</h3>
// //             <div class="post-meta">
// //               <span class="language">{{ post.language }}</span>
// //               <span class="difficulty">{{ post.difficulty }}</span>
// //               <span class="points">{{ post.points }} pts</span>
// //             </div>
// //             <p class="description">
// //               {{ post.description }}
// //             </p>
// //             <div class="post-footer">
// //               <span class="time-limit">{{ post.timeLimit }}</span>
// //               <button class="edit-btn">Edit</button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   `,
// //   styles: [`
// //     .profile-container {
// //       display: flex;
// //       margin: 20px;
// //     }
// //     .profile-sidebar {
// //       width: 300px;
// //       padding: 20px;
// //       background-color: #f4f4f9;
// //       box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// //     }
// //     .profile-content {
// //       flex: 1;
// //       padding: 20px;
// //     }
// //     .stats-section, .badge-section {
// //       margin-bottom: 20px;
// //     }
// //     .stat-item, .badge {
// //       display: flex;
// //       justify-content: space-between;
// //       margin-bottom: 10px;
// //     }
// //     .actions-section {
// //       display: flex;
// //       flex-direction: column;
// //     }
// //     .action-btn {
// //       background-color: #007bff;
// //       color: white;
// //       border: none;
// //       padding: 10px;
// //       margin-bottom: 10px;
// //       cursor: pointer;
// //     }
// //     .action-btn.danger {
// //       background-color: #e63946;
// //     }
// //     .content-header {
// //       display: flex;
// //       justify-content: space-between;
// //       margin-bottom: 20px;
// //     }
// //     .posts-grid {
// //       display: grid;
// //       grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
// //       gap: 20px;
// //     }
// //     .post-card {
// //       padding: 20px;
// //       background-color: #fff;
// //       box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// //     }
// //     .post-meta {
// //       display: flex;
// //       justify-content: space-between;
// //       margin-bottom: 10px;
// //     }
// //     .description {
// //       margin-bottom: 10px;
// //     }
// //     .edit-btn {
// //       background-color: #ffbf00;
// //       color: white;
// //       border: none;
// //       padding: 8px 15px;
// //       cursor: pointer;
// //     }
// //   `]
// // })
// // export class ProfileComponent implements OnInit {
// //   userProfile: any;

// //   constructor(private profileService: ProfileService) {}

// //   ngOnInit(): void {
// //     // Fetch user profile data on initialization
// //     this.profileService.getUserProfile().subscribe(data => {
// //       this.userProfile = data;
// //     });
// //   }

// //   signOut() {
// //     this.profileService.signOut();
// //     // Additional logic to handle sign-out
// //   }

// //   deleteAccount() {
// //     if (confirm('Are you sure you want to delete your account?')) {
// //       this.profileService.deleteAccount();
// //       // Logic for handling the deletion
// //     }
// //   }
// // }


// src/app/profile/profile.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent],
  template: `
    <app-navbar [isLoggedIn]="true"></app-navbar>
    <div class="profile-container">
      <div class="profile-sidebar">
        <div class="stats-section">
          <h3>Statistics</h3>
          <div class="stat-item">
            <span>Total Submissions</span>
            <span>{{ userProfile?.totalSubmissions }}</span>
          </div>
          <div class="stat-item">
            <span>Points Earned</span>
            <span>{{ userProfile?.pointsEarned }}</span>
          </div>
        </div>

        <div class="badge-section">
          <h3>Current Badge</h3>
          <div class="badge">
            <div class="badge-icon">{{ userProfile?.badge.icon }}</div>
            <span>{{ userProfile?.badge.name }}</span>
          </div>
          <button class="view-roadmap">View Badge Roadmap</button>
        </div>

        <div class="actions-section">
          <button class="action-btn" (click)="signOut()">Sign Out</button>
          <button class="action-btn settings">Settings</button>
          <button class="action-btn danger" (click)="deleteAccount()">Delete Account</button>
        </div>
      </div>

      <div class="profile-content">
        <div class="content-header">
          <h2>My Posts</h2>
          <button class="new-post-btn" routerLink="/posts/new">Create New Post</button>
        </div>

        <div class="posts-grid">
          <div class="post-card" *ngFor="let post of userProfile?.posts">
            <h3>{{ post.title }}</h3>
            <div class="post-meta">
              <span class="language">{{ post.language }}</span>
              <span class="difficulty">{{ post.difficulty }}</span>
              <span class="points">{{ post.points }} pts</span>
            </div>
            <p class="description">
              {{ post.description }}
            </p>
            <div class="post-footer">
              <span class="time-limit">{{ post.timeLimit }}</span>
              <br/>
              <br/>
              <button class="edit-btn">Edit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .profile-container {
  display: flex;
  gap: 20px;
  margin: 20px;
  flex-wrap: wrap;
}

.profile-sidebar {
  width: 300px;
  padding: 20px;
  background-color: #f4f4f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  flex-shrink: 0;
}

.profile-content {
  flex: 1;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  min-width: 300px;
}

.stats-section, .badge-section {
  margin-bottom: 20px;
}

.stat-item, .badge {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.stat-item span, .badge span {
  font-weight: 600;
  color: #333;
}

.badge-icon {
  display: inline-block;
  width: 32px;
  height: 32px;
  background-color: #007bff;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  margin-right: 10px;
}

.actions-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.action-btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s, background-color 0.3s ease-in-out;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.action-btn:hover {
  background-color: #0056b3;
  transform: translateY(-4px);
}

.action-btn.danger {
  background-color: #e63946;
}

.action-btn.danger:hover {
  background-color: #c03030;
  transform: translateY(-4px);
}

.content-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.new-post-btn {
  padding: 12px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, transform 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.new-post-btn:hover {
  background-color: #218838;
  transform: translateY(-4px);
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.post-card {
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.post-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.post-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.language, .difficulty {
  font-weight: 500;
  color: #555;
}

.points {
  font-weight: 600;
  color: #007bff;
}

.description {
  margin-bottom: 10px;
  color: #555;
}

.edit-btn {
  background-color: blue;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.edit-btn:hover {
  background-color: #e0a800;
  transform: translateY(-4px);
}

@media (max-width: 768px) {
  .profile-container {
    flex-direction: column;
  }

  .profile-sidebar {
    width: 100%;
  }

  .profile-content {
    width: 100%;
  }
}

  `]
})
export class ProfileComponent implements OnInit {
  userProfile: any;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    // Fetch user profile data on initialization
    this.profileService.getUserProfile().subscribe(data => {
      this.userProfile = data;
    });
  }

  signOut() {
    this.profileService.signOut();
    // Additional logic to handle sign-out
  }

  deleteAccount() {
    if (confirm('Are you sure you want to delete your account?')) {
      this.profileService.deleteAccount();
      // Logic for handling the deletion
    }
  }
}
