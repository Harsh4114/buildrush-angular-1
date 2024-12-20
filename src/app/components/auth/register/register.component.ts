import { Component, inject,} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule and FormGroup,Validators
import { NavbarComponent } from '../../navbar/navbar.component';

import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, NavbarComponent], // Removed FormsModule, it's not needed with ReactiveFormsModule
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
 
router = inject(Router); 

  submit() {
    alert('Form Submitted');
    this.router.navigateByUrl('/login') // Navigate to /login page
  }
}