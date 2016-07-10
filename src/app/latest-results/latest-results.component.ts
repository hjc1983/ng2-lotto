import { Component, OnInit, Output } from '@angular/core';
import { LatestResultsDetailComponent } from './latest-results-detail.Component';
import { DrawResult } from '../DrawResult.model';
import { LottoService } from '../lotto.service';

@Component({
  moduleId: module.id,
  selector: 'app-latest-results',
  template: `<h1>{{title}}</h1>
    <ul class="draws">
      <li *ngFor="let draw of drawResults"
        [class.selected]="draw === selectedDraw"
        (click)="onSelect(draw)">
        <span class="badge">{{draw.DrawDate}}</span> {{draw.ProductId}}
      </li>
    <ul>
    <my-draw-detail [draw]="selectedDraw"></my-draw-detail>`,
  styleUrls: ['latest-results.component.css'],
  directives: [LatestResultsDetailComponent],
  providers: [LottoService]

})
export class LatestResultsComponent implements OnInit {
  title = 'LOTTO';
  drawResults: DrawResult[];
  selectedDraw: DrawResult;

  onSelect(draw: DrawResult) { this.selectedDraw = draw; }

  getLatestResults() {
    //this.drawResults = this.lottoService.getLatestResults();
    this.lottoService.getLatestResults().then(r => this.drawResults = r);  //also try getLatestResultsSlowly()
  }

  constructor(private lottoService: LottoService) { }

  ngOnInit() {
    this.getLatestResults();
  }

}
