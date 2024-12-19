import { Component } from '@angular/core';
import { NavbarComponent } from "../components/navbar/navbar.component";

interface Ranker {
  name: string;
  score: number;
}

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css'],
  imports: [NavbarComponent]
})
export class LeaderboardComponent {
  rankers: Ranker[] = [
    { name: 'John Doe', score: 100 },
    { name: 'Jane Smith', score: 95 },
    { name: 'Peter Jones', score: 88 },
    // Add more rankers as needed
  ];
}