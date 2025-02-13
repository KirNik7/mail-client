import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { OutboxComponent } from './components/outbox/outbox.component';
import { CreateComponent } from './components/create/create.component';
import { DraftsComponent } from './components/drafts/drafts.component';
import { EmailDetailComponent } from './components/email-detail/email-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InboxComponent,
    OutboxComponent,
    CreateComponent,
    DraftsComponent,
    EmailDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}