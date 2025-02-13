import { Component } from '@angular/core';
import { EmailService } from '../../services/email.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-outbox',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './outbox.component.html',
  styles: [`
    .container {
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    h2 {
      margin-bottom: 20px;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      margin-bottom: 10px;
      padding: 10px;
      border: 1px solid #eee;
      border-radius: 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    a {
      text-decoration: none;
      color: #007bff;
    }
    a:hover {
      text-decoration: underline;
    }
    button {
      background-color: #dc3545;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      padding: 5px 10px;
    }
    button:hover {
      background-color: #c82333;
    }
  `]
})
export class OutboxComponent {
  emails: any[] = [];

  constructor(private emailService: EmailService) {
    this.emails = this.emailService.getOutboxEmails();
  }

  deleteEmail(id: number): void {
    this.emailService.deleteEmail(id);
    this.emails = this.emailService.getOutboxEmails();
  }
}