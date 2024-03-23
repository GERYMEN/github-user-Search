import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { RepoCardComponent } from '../../components/repo-card/repo-card.component';
import { ProfileService } from '../../services/profile.service';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
MatButtonModule;
@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [
    RepoCardComponent,
    HeaderComponent,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css',
})
export class ProfilePageComponent {
  gist: any[] = [];
  profileAvatar: string = 'https://avatars.githubusercontent.com/u/308031?v=4';
  gistService = inject(ProfileService);
  username: string = '';

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.gistload();
    this.username = this.route.snapshot.params['id'];
  }

  gistload() {
    this.gistService.searchGist(this.route.snapshot.params['id']).subscribe({
      next: (data: any) => {
        this.gist = data;
      },
      error: (err: any) => {
        console.error('Error in Cart API call', err);
      },
    });
    this.gistService.profileData(this.route.snapshot.params['id']).subscribe({
      next: (data: any) => {
        this.profileAvatar = data.avatar_url;
      },
      error: (err: any) => {
        console.error('Error in Cart API call', err);
      },
    });
  }
}
