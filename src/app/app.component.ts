import { Component } from '@angular/core';
import { LatestResultsComponent } from './latest-results/latest-results.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [LatestResultsComponent]
})
export class AppComponent {
  title = 'Home - app works!';
}
