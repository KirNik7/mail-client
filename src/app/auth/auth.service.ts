import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' }
  ];
  private isAuthenticatedSubject = new BehaviorSubject(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      this.isAuthenticatedSubject.next(true);
      localStorage.setItem('authenticatedUser', username);
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticatedSubject.next(false);
    localStorage.removeItem('authenticatedUser');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('authenticatedUser');
  }

  getCurrentUser(): string | null {
    return localStorage.getItem('authenticatedUser');
  }
}