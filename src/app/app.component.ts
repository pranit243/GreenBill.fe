import { Component } from '@angular/core';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './core/services/auth/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, SidebarComponent, NavbarComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private authService: AuthService) {}

  sidebarOpen = false;
  selectedMenu = 'Dashboard';
  profileOpen = false;
  profile = {
    name: 'John Doe',
    role: 'Administrator',
    email: 'john.doe@example.com',
    phone: '+91 98765 43210',
    location: 'Pune, India'
  };

  toggleSidebar(): void {
    this.sidebarOpen =
    !this.sidebarOpen;
  }

  closeSidebar(): void {
    this.sidebarOpen = false;
  }

  onMenuSelected(menu: string): void {
    this.selectedMenu = menu;
  }

  openProfile(): void {
    this.profileOpen = true;
  }

  closeProfile(): void {
    this.profileOpen = false;
  }

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
