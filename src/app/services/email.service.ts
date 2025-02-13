import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private emails: any[] = [];
  private drafts: any[] = [];

  constructor() {
    this.loadFromLocalStorage();
  }

  private loadFromLocalStorage(): void {
    const savedEmails = localStorage.getItem('emails');
    const savedDrafts = localStorage.getItem('drafts');
    if (savedEmails) {
      this.emails = JSON.parse(savedEmails);
    } else {
      this.emails = [
        { id: 1, subject: 'Test Email 1', body: 'This is a test email.', to: 'user1', from: 'user2' },
        { id: 2, subject: 'Test Email 2', body: 'Another test email.', to: 'user1', from: 'user2' }
      ];
      this.saveToLocalStorage();
    }
    if (savedDrafts) {
      this.drafts = JSON.parse(savedDrafts);
    } else {
      this.drafts = [];
      this.saveToLocalStorage();
    }
  }

  private saveToLocalStorage(): void {
    localStorage.setItem('emails', JSON.stringify(this.emails));
    localStorage.setItem('drafts', JSON.stringify(this.drafts));
  }

  private getCurrentUser(): string {
    return localStorage.getItem('authenticatedUser') || '';
  }

  getInboxEmails(): any[] {
    return this.emails.filter(email => email.to === this.getCurrentUser());
  }

  getOutboxEmails(): any[] {
    return this.emails.filter(email => email.from === this.getCurrentUser());
  }

  getEmailById(id: number): any | undefined {
    return this.emails.find(email => email.id === id) || this.drafts.find(draft => draft.id === id);
  }

  getDrafts(): any[] {
    return this.drafts;
  }

  sendEmail(email: any): void {
    this.emails.push(email);
    this.saveToLocalStorage();
  }

  saveDraft(draft: any): void {
    this.drafts.push(draft);
    this.saveToLocalStorage();
  }

  deleteEmail(id: number): void {
    this.emails = this.emails.filter(email => email.id !== id);
    this.saveToLocalStorage();
  }

  deleteDraft(id: number): void {
    this.drafts = this.drafts.filter(draft => draft.id !== id);
    this.saveToLocalStorage();
  }
}