import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ServiceComponent } from "../landing/LandingPageComponent/service/service.component";
import { FooterComponent } from "../landing/LandingPageComponent/footer/footer.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavbarComponent, ServiceComponent, FooterComponent],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class AboutComponent { }
