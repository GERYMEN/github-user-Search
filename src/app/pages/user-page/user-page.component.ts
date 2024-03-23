import { Component,ViewChild } from '@angular/core';
import { RepoCardComponent } from '../../components/repo-card/repo-card.component';
import { RepoCapsuleComponent } from '../../components/repo-capsule/repo-capsule.component';
import { HeaderComponent } from '../../components/header/header.component';
@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [RepoCardComponent,RepoCapsuleComponent,HeaderComponent],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {
@ViewChild('userCapsule') userCapsule:any;
}
