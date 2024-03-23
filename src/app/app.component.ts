import { Component } from '@angular/core';
import { RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { RepoCardComponent } from './components/repo-card/repo-card.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { RepoCapsuleComponent } from './components/repo-capsule/repo-capsule.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    HeaderComponent,
    RepoCardComponent,
    UserPageComponent,
    ProfilePageComponent,
    RepoCapsuleComponent,
    RepoCardComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
title="header"
}
