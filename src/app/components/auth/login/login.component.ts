import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../navbar/navbar.component';
import { AuthService } from '../../../../service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, NavbarComponent],
 templateUrl: './login.component.html', 

  styleUrls: ['./login.component.css'] // this is external css file for login file 

})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };

  onSubmit() {
    // TODO: Implement login logic
    console.log('Login submitted:', this.loginData);
    const { email, password } = this.loginData;
    auth : AuthService; 
    

  }
}