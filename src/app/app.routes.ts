import { Routes } from '@angular/router';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
export const routes: Routes = [
    
    {path:'',title:'User',component:UserPageComponent},
    {path:'profile/:id',title:'Profile',component:ProfilePageComponent}
];

/*
The 'routes' constant is an array of Route objects. 
Each Route object has three properties:
- 'path': a string that specifies the URL path to be matched against the browser's URL.
- 'title': a string that specifies the title of the page to be displayed in the browser's title bar.
- 'component': a reference to the Angular component that is to be displayed when the URL path matches.

In this application, 
- The empty path ('path':'') matches the root URL and displays the UserPageComponent.
- The path '/profile/:id' matches URLs with a path beginning '/profile/' followed by an id, and displays the ProfilePageComponent.

The ':id' in the path is a parameter. When a URL that matches the path is entered, the value of the id is extracted from the URL and passed to the ProfilePageComponent as a parameter named 'id'. The ProfilePageComponent can then use this parameter to retrieve data from an API.
*/

