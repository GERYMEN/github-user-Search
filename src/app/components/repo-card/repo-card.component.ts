import { Component,OnInit, inject,ElementRef, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgFor,NgClass } from '@angular/common';
import { ProfileService } from '../../services/profile.service';
import { Observable } from 'rxjs';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
// import { async } from 'rxjs';
@Component({
  selector: 'app-repo-card',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatIconModule,NgFor,HttpClientModule,NgClass,MatPaginatorModule,RouterLink],
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.css']
})
export class RepoCardComponent implements OnInit{
  httpClient=inject(HttpClient) // HttpClient instance
  private repoService=inject(ProfileService) // Instance of ProfileService
  title = "repo-card"; // Component title
  reposLink = Array(10).fill(null);  // Array of 10 null values for reposLink
  repodata:any[]=[] // Array to store repo data
  repoLength:number=1 // Variable to store length of repo data
  PageSize=10; // Variable to store page size
  currentPage=0; // Variable to store current page index
  paginatedRepoData: any[] = []; // Array to store paginated repo data
  username:string='' // Variable to store username
  repo_api_loading:boolean=true; // Variable to indicate if repo api is loading
  repo_api_error:boolean=true; // Variable to indicate if there is an error in repo api
  @ViewChild('repcardID') repcardID!: ElementRef; // Element reference to repcardID

  /**
   * Constructor to initialize ActivatedRoute
   * @param route - ActivatedRoute instance
   */
  constructor(private route : ActivatedRoute){}


  /**
   * ngOnInit lifecycle hook to set repo_api_loading to true and call repo_load function
   */
  ngOnInit():void{
    this.repo_api_loading=true;
    this.repo_api_error=false;
    this.repo_load();
    }


  /**
   * Function to load repositories from ProfileService and update component variables
   */
  repo_load() {
    // Subscribe to searchRepositories function and update variables based on the response
    this.repoService.searchRepositories(this.route.snapshot.params['id']).subscribe(
      {

        next: (data: any) => {
          console.log(data)
          this.repodata=data
          this.repoLength=data.length
          this.paginatedRepoData=this.repodata.slice(0,10)
          this.repo_api_loading=false
          window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        error: (err: any) => {
          console.error('Error in SearchRepositories API call', err);
          this.repo_api_error=true;
        }
      });
   
  }

  /**
   * Function to handle page change event and update paginatedRepoData
   * @param event - PageEvent object
   */
  onPageChange(event:PageEvent){
    this.currentPage = event.pageIndex;
    this.PageSize=event.pageSize;

    const startIndex = event.pageIndex * event.pageSize;
  const endIndex = startIndex + event.pageSize;
  this.paginatedRepoData = this.repodata.slice(startIndex, endIndex);
  this.repcardID.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

}
 