import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mflix-visualizer';
  results : Object[];
  obs : Observable<object>;
  constructor(private http : HttpClient, private sanitizer: DomSanitizer){}

  load10Movies()
  {
    this.obs = this.http.get("https://3000-bc56e33b-24e6-4947-b6ca-cfd8d56f3df7.ws-eu01.gitpod.io/movies/list/10");
    this.obs.subscribe(this.getData);
  }
  loadHorror()
  {
    this.obs = this.http.get("https://3000-bc56e33b-24e6-4947-b6ca-cfd8d56f3df7.ws-eu01.gitpod.io/movies/movie_from_genres/Horror");
    this.obs.subscribe(this.getData);
  }
  loadComedy()
  {
    this.obs = this.http.get("https://3000-bc56e33b-24e6-4947-b6ca-cfd8d56f3df7.ws-eu01.gitpod.io/movies/movie_from_genres/Comedy");
    this.obs.subscribe(this.getData);
  }
  getData = (data) => {
    this.results = data;
  }

  photoURL(urltoSanitize) {
    console.log(urltoSanitize);
    if((urltoSanitize)!=undefined)
    return this.sanitizer.bypassSecurityTrustUrl(urltoSanitize);
    else
    return false
}
}
