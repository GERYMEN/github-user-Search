import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { RepoCardComponent } from '../../components/repo-card/repo-card.component';
import { ProfileService } from '../../services/profile.service';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

/**
 * Component for Profile Page.
 * This component fetches Gists and Profile data and displays them on the UI.
 */
@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [
    RepoCardComponent,
    HeaderComponent,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent {
  // Array to store gists
  gist: any[] = [];
  // URL of profile avatar
  profileAvatar: string = 'https://avatars.githubusercontent.com/u/308031?v=4';
  // Profile service for making API calls
  gistService = inject(ProfileService);
  // Username from route parameter
  username: string = '';
  // User bio
  bio: string = '';
  // Total number of repositories
  totalrepo: string = '';

  
  constructor(private route: ActivatedRoute) {}

  /**
   * Lifecycle hook to initialize the component
   */
  ngOnInit(): void {
    this.gistload();
    this.username = this.route.snapshot.params['id'];
  }

  /**
   * Function to load gist data from API
   */
  gistload() {
    // Make API call to fetch gists
    this.gistService.searchGist(this.route.snapshot.params['id']).subscribe({
      next: (data: any) => {
        this.gist = data;
      },
      error: (err: any) => {
        console.error('Error in fetching gist data', err);
      },
    });

    // Make API call to fetch profile data
    this.gistService
      .profileData(this.route.snapshot.params['id'])
      .subscribe({
        next: (data: any) => {
          console.log('name', this.route.snapshot.params['id']);
          console.log(data);
          this.profileAvatar = data.avatar_url;
          this.bio = data.bio ? data.bio : 'Bio not available';
          this.totalrepo = data.public_repos
            ? data.public_repos
            : '0';
        },
        error: (err: any) => {
          console.error('Error in fetching profile data', err);
        },
      });
  }
}

