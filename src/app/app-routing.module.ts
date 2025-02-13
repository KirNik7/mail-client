import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { OutboxComponent } from './components/outbox/outbox.component';
import { CreateComponent } from './components/create/create.component';
import { DraftsComponent } from './components/drafts/drafts.component';
import { EmailDetailComponent } from './components/email-detail/email-detail.component';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'inbox', component: InboxComponent, canActivate: [authGuard] },
  { path: 'outbox', component: OutboxComponent, canActivate: [authGuard] },
  { path: 'create', component: CreateComponent, canActivate: [authGuard] },
  { path: 'drafts', component: DraftsComponent, canActivate: [authGuard] },
  { path: 'email/:id', component: EmailDetailComponent, canActivate: [authGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const APP_ROUTES = routes;