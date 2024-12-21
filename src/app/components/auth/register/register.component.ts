import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../../service/auth.service';
import { NavbarComponent } from "../../navbar/navbar.component";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [NavbarComponent, CommonModule, ReactiveFormsModule], 
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const { email, username, password, confirmPassword } = this.registerForm.value;
      if (password === confirmPassword) {
        this.authService.SignUp(email, username, password).subscribe((result) => {
          if (result) {
            console.log('Signup successful:', result);
          } else {
            console.error('Signup failed.');
          }
        });
      } else {
        console.error('Passwords do not match.');
      }
    } else {
      console.error('Form is invalid.');
    }
  }
}
