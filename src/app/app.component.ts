import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styles: [`
    nav {
      background-color: #f8f9fa;
      padding: 10px;
      text-align: center;
    }
    nav a {
      margin: 0 10px;
      text-decoration: none;
      color: #007bff;
    }
    nav a:hover {
      text-decoration: underline;
    }
    nav button {
      margin-left: 10px;
      padding: 5px 10px;
      background-color: #dc3545;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    nav button:hover {
      background-color: #c82333;
    }
  `]
})
export class AppComponent {
  isAuthenticated = false;

  constructor(private authService: AuthService) {
    this.authService.isAuthenticated$.subscribe(status => {
      this.isAuthenticated = status;
    });
  }

  onLogout(): void {
    this.authService.logout();
  }
}