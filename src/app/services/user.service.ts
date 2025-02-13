import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' }
  ];

  getUsers() {
    return this.users;
  }

  getUserByUsername(username: string) {
    return this.users.find(user => user.username === username);
  }
}