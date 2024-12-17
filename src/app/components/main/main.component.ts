import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from "../../Pages/dashboard/dashboard.component";
import { MainNavBarComponent } from "../../Pages/main-nav-bar/main-nav-bar.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterModule, DashboardComponent, MainNavBarComponent, ],
  templateUrl: './main.html',
  styleUrls: ['./main.css']
})
export class MainComponent { }