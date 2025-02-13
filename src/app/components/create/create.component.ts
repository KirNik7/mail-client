import { Component } from '@angular/core';
import { EmailService } from '../../services/email.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create.component.html',
  styles: [`
    .container {
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    .form-group {
      margin-bottom: 15px;
    }
    label {
      display: block;
      margin-bottom: 5px;
    }
    input, textarea {
      width: 100%;
      padding: 8px;
      box-sizing: border-box;
    }
    textarea {
      height: 150px;
    }
    button {
      padding: 10px 15px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      margin-right: 10px;
    }
    button:hover {
      background-color: #0056b3;
    }
  `]
})
export class CreateComponent {
  to = '';
  subject = '';
  body = '';

  constructor(private emailService: EmailService, private authService: AuthService) {}

  onSendEmail() {
    const email = {
      id: Date.now(),
      subject: this.subject,
      body: this.body,
      to: this.to,
      from: this.authService.getCurrentUser()!
    };
    this.emailService.sendEmail(email);
    this.to = '';
    this.subject = '';
    this.body = '';
  }

  onSaveDraft() {
    const draft = {
      id: Date.now(),
      subject: this.subject,
      body: this.body,
      to: this.to
    };
    this.emailService.saveDraft(draft);
    this.to = '';
    this.subject = '';
    this.body = '';
  }
}