
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent],
  templateUrl: "./client.html",
  styleUrls: ["./client.css"],
})
export class ClientComponent {
  // Example static data
  totalPosts = 24;
  activeTasks = 12;
  completedTasks = 156;
  successRate = 92;
  newPostsThisWeek = 3;

  // Example task data
  tasks = [
    { id: 1, name: 'Task 1', category: 'Frontend', points: 50, submissions: 12, status: 'Active' },
    { id: 2, name: 'Task 2', category: 'Backend', points: 30, submissions: 8, status: 'Completed' },
    { id: 3, name: 'Task 3', category: 'Design', points: 40, submissions: 15, status: 'Active' },
    { id: 4, name: 'Task 4', category: 'Frontend', points: 20, submissions: 5, status: 'Pending' },
    { id: 5, name: 'Task 5', category: 'Backend', points: 60, submissions: 10, status: 'Active' },
  ];

  // Event handlers for Edit and Delete actions
  editPost(id: number) {
    // Navigate to the post edit page or handle edit logic
    console.log(`Editing post with id: ${id}`);
  }

  deletePost(id: number) {
    // Confirm and delete the post
    const index = this.tasks.findIndex(task => task.id === id);
    if (index > -1) {
      this.tasks.splice(index, 1);
      console.log(`Deleted post with id: ${id}`);
    }
  }
}
