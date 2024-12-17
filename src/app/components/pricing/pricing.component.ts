import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './pricing.html',
  styleUrls: ['./pricing.css']
})
export class PricingComponent { }