import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepoServiceService {
  private apiUrl = 'https://api.github.com/search/users?q='; // Base API URL

  constructor(private http: HttpClient) { }

  // Method to search repositories with pagination
  searchRepositories(name:string='angular',page: number = 1): Observable<any> {
    const url = `${this.apiUrl}${name}&page=${page}`; // Construct URL with page parameter
    const headers = {
      Authorization: 'Basic ' + btoa('aa3173c2ae2835faf1d1' + ':' + '368eaaed91351c8faf75e735c14bfc084022eee5')
    };

    // Return the observable directly instead of subscribing within the service
    return this.http.get<any>(url, { headers });
  }
}
