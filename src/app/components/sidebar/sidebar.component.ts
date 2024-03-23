import { Component } from '@angular/core';
import { NgFor,CommonModule } from '@angular/common';
import { RepoCapsuleComponent } from '../repo-capsule/repo-capsule.component';
import { MatIconModule } from '@angular/material/icon'; 
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatIconModule,RepoCapsuleComponent,CommonModule,NgFor],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
 title="sidebar"
 reposLink = Array(10).fill(null); 
}
