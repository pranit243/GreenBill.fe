import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';
import { LoginRequest } from '../../../core/models/auth/login-request.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  form = { email: '', password: '' };
  isLoading = false;
  errorMessage = '';

  onSubmit(ngForm: any): void {
    if (ngForm.invalid) return;

    const request: LoginRequest = {
      email: this.form.email,
      password: this.form.password
    };

    this.isLoading = true;
    this.errorMessage = '';

    this.authService.login(request).subscribe({
      next: () => {
        this.isLoading = false;
        this.navigateByRole(this.authService.getRole());
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err.error?.message ?? 'Invalid credentials. Please try again.';
      }
    });
  }

  private navigateByRole(role: string | null): void {
    const routes: Record<string, string> = {
      Owner: '/owner/dashboard',
      Merchant: '/merchant/dashboard',
      Customer: '/customer/dashboard',
      Partner: '/partner/dashboard'
    };
    this.router.navigate([routes[role ?? ''] ?? '/auth/login']);
  }
}
