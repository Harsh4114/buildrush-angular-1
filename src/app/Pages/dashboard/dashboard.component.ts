import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { MainNavBarComponent } from "../main-nav-bar/main-nav-bar.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'], // Fixed typo: "styleUrl" -> "styleUrls"
})
export class DashboardComponent {
  detailsVisible = false;

  toggleDetails(): void {
    this.detailsVisible = !this.detailsVisible;
  }
}
