import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { RegisterRequest } from '../../../../core/models/auth/register-request.model';

@Component({
  selector: 'app-partner-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './partner-register.component.html',
  styleUrl: './partner-register.component.scss'
})
export class PartnerRegisterComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  form = {
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  };

  isLoading = false;
  errorMessage = '';

  onSubmit(ngForm: any): void {
    if (ngForm.invalid) return;

    if (this.form.password !== this.form.confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    const request: RegisterRequest = {
      email: this.form.email,
      phoneNumber: this.form.phoneNumber,
      password: this.form.password,
      roleName: 'Partner'
    };

    this.isLoading = true;
    this.errorMessage = '';

    this.authService.register(request).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['/auth/login']);
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err.error?.message ?? 'Registration failed. Please try again.';
      }
    });
  }
}
