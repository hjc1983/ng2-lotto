import { Component, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LatestResultsDetailComponent } from './latest-results-detail.Component';
import { DrawResult } from '../DrawResult.model';
import { DrawResults } from '../DrawResult.model';
import { LottoService } from '../lotto.service';

@Component({
  moduleId: module.id,
  selector: 'app-latest-results',
  template: `<h1>{{title}}</h1>
    <ul class="draws">
      <li *ngFor="let draw of (drawResults |async);  let i=index"
        [class.selected]="draw === selectedDraw"
        (click)="onSelect(draw)">
        <span class="badge">{{i+1}}</span> {{draw.ProductId}} - {{draw.DrawDate}}
      </li>
    <ul>
    <my-draw-detail [draw]="selectedDraw"></my-draw-detail>`,
  styleUrls: ['latest-results.component.css'],
  directives: [LatestResultsDetailComponent],
  providers: [LottoService]

})
export class LatestResultsComponent implements OnInit {
  title = 'SALotteries';
  drawResults: Observable<DrawResults[]>;
  selectedDraw: DrawResult;
  lottoDR$: Observable<DrawResult>;

  onSelect(draw: DrawResult) { this.selectedDraw = draw; }


  constructor(private _lottoService: LottoService) { }
  ngOnInit() {
    //this.getLatestResults();
    this.lottoDR$ = this._lottoService.lottoDR$;
    this._lottoService.getLatestResults();
    this.drawResults = this.lottoDR$.map(m=>m.DrawResults);
  }

}
