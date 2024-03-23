import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { RepoServiceService } from '../../services/repo-service.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-repo-capsule',
  standalone: true,
  imports: [MatButtonModule, RouterLink,MatIconModule,FormsModule],
  templateUrl: './repo-capsule.component.html',
  styleUrl: './repo-capsule.component.css',
})
export class RepoCapsuleComponent {
  private repoService = inject(RepoServiceService);
  api_loading: boolean = true; // api call state handling
  api_error: boolean = false; // api call state handling
  profiledata: any[] = []; // api call state handling
  searchQuery: string = ''; //search bar input value

  ngOnInit(): void {
    this.api_loading = true; //set value to intialising rendering
    this.api_error=false; //set value to intialising rendering
    this.repo_load(); //set value to intialising rendering
  }
  
  searchValueChange(value:string):void{
    if(value.trim()!==''){ //if search query is not empty call the api
      this.repo_load(value);
    }else{
      this.repo_load();//call default function when clearing the searchbar
    }
  }


  repo_load(name:string="angular") { //call github api and get data of user with
    this.repoService.searchRepositories(name).subscribe({
      next: (data: any) => {
        this.profiledata = data.items;
        this.api_loading = false;
      },
      error: (err: any) => {
        console.error('Error in user api call', err);
        this.api_loading = true;
        this.api_error = true;
      },
    });
  }
}
