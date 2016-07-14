import { Component } from '@angular/core';
import { LatestResultsComponent } from './latest-results/latest-results.component';
//import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { LottoService } from './lotto.service';
import {LottoServeStatus} from './LottoServeStatus.model'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [LatestResultsComponent],
  providers: [LottoService]
})
export class AppComponent {
  title = 'Home - app works!';
  lotto$: Observable<LottoServeStatus>;
  status: Observable<boolean>;

  constructor(private _lottoService: LottoService) {
  }

  ngOnInit() {
    this.lotto$ = this._lottoService.lotto$;
    //this.singleTodo$ = this._lottoService.todos$.map(todos => todos.find(item => item.id === '1'));
    this.status= this._lottoService.lotto$.map(m=>m.Healthy);
    this._lottoService.checkHealth();
    //this._lottoService.load('1');
  }
}
