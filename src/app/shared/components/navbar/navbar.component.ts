import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private authService: AuthService) {}

  get isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  get role(): string | null {
    return this.authService.getRole();
  }

  get dashboardRoute(): string {
    const routes: Record<string, string> = {
      Owner: '/owner/dashboard',
      Merchant: '/merchant/dashboard',
      Customer: '/customer/dashboard',
      Partner: '/partner/dashboard'
    };
    return routes[this.role ?? ''] ?? '/';
  }

  logout(): void {
    this.authService.logout();
  }
}
