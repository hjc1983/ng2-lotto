import { Component } from '@angular/core';
import { LatestResultsComponent } from './latest-results/latest-results.component';
import {Http, Response} from '@angular/http';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [LatestResultsComponent]
})
export class AppComponent {
  title = 'Home - app works!';
data: Object;
 loading: boolean;
  constructor(public http: Http) {
  }

  makeRequest(): void {
 // do something with this.http ...
 this.loading = true;
  this.http.request('https://thelott.com/sales/vmax/web/status') //this.http.request('http://jsonplaceholder.typicode.com/posts/1')
 .subscribe((res: Response) => {
 this.data = res.json();
 this.loading = false;
 });

 }

}
