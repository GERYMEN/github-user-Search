import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = `https://api.github.com/users/`; // Base API URL

  constructor(private http: HttpClient) { }

  // Method to search repositories with pagination
  searchRepositories(name:string,page: number = 1, perPage: number = 100): Observable<any> {
    const params = {
      per_page: perPage.toString(),
      page: page.toString()
    };
    const headers = {
      Authorization: 'Basic ' + btoa('aa3173c2ae2835faf1d1' + ':' + '368eaaed91351c8faf75e735c14bfc084022eee5')
    };

    // Return the observable directly instead of subscribing within the service
    return this.http.get<any>(this.apiUrl+name+'/repos', { params, headers });
  }

  

  searchGist(name:string,page: number = 1, perPage: number = 5): Observable<any> {
    const params = {
      per_page: perPage.toString(),
      page: page.toString()
    };
    const headers = {
      Authorization: 'Basic ' + btoa('aa3173c2ae2835faf1d1' + ':' + '368eaaed91351c8faf75e735c14bfc084022eee5')
    };

    // Return the observable directly instead of subscribing within the service
    return this.http.get<any>(this.apiUrl+name+'/gists', { params, headers });
  }
  profileData(name:string){
    const headers = {
      Authorization: 'Basic ' + btoa('aa3173c2ae2835faf1d1' + ':' + '368eaaed91351c8faf75e735c14bfc084022eee5')
    };

    // Return the observable directly instead of subscribing within the service
    return this.http.get<any>(this.apiUrl+name, {headers });
  }
}
