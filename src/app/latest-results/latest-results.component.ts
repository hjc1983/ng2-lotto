import { Component, OnInit, Output } from '@angular/core';
import { LatestResultsDetailComponent } from './latest-results-detail.Component';
import { DrawResult } from './DrawResult.model';
//import { Dividend } from './Dividend.model';

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
  directives: [LatestResultsDetailComponent]
})
export class LatestResultsComponent implements OnInit {
  title = 'LOTTO';
  drawResults: DrawResult[];
  selectedDraw: DrawResult;

  onSelect(draw: DrawResult) { this.selectedDraw = draw; }

  constructor() { }

  ngOnInit() {
    this.drawResults = [
      {
        "ProductId": "Keno",
        "DrawNumber": 2134136,
        "DrawDate": "2016-07-08T13:00:00.077",
        "DrawDisplayName": "Keno Draw 2134136",
        "DrawLogoUrl": "http://media.tatts.com/TattsServices/Lotto/Products/Keno_v1.png",
        "PrimaryNumbers": [
          43,
          18,
          2,
          60,
          33,
          5,
          50,
          64,
          77,
          29,
          13,
          32,
          38,
          47,
          21,
          15,
          69,
          42,
          10,
          9
        ],
        "SecondaryNumbers": [
          1
        ],
        "TicketNumbers": null,
        "Dividends": [

        ]
      },
      {
        "ProductId": "SetForLife",
        "DrawNumber": 337,
        "DrawDate": "2016-07-08T00:00:00",
        "DrawDisplayName": "Set for Life Draw 337",
        "DrawLogoUrl": "http://media.tatts.com/TattsServices/Lotto/Products/SetForLife_v1.png",
        "PrimaryNumbers": [
          20,
          24,
          22,
          4,
          23,
          1,
          33,
          36
        ],
        "SecondaryNumbers": [
          15,
          9
        ],
        "TicketNumbers": null,
        "Dividends": [
          {
            "Division": 1,
            "BlocNumberOfWinners": 0,
            "BlocDividend": 0.0,
            "CompanyId": "SALotteries",
            "CompanyNumberOfWinners": 0,
            "CompanyDividend": 0.0,
            "PoolTransferType": "NONE",
            "PoolTransferredTo": 0
          },
          {
            "Division": 2,
            "BlocNumberOfWinners": 0,
            "BlocDividend": 0.0,
            "CompanyId": "SALotteries",
            "CompanyNumberOfWinners": 0,
            "CompanyDividend": 0.0,
            "PoolTransferType": "TO_DIVISION",
            "PoolTransferredTo": 3
          },
          {
            "Division": 3,
            "BlocNumberOfWinners": 3,
            "BlocDividend": 3459.7000,
            "CompanyId": "SALotteries",
            "CompanyNumberOfWinners": 0,
            "CompanyDividend": 3459.7000,
            "PoolTransferType": "NONE",
            "PoolTransferredTo": 0
          },
          {
            "Division": 4,
            "BlocNumberOfWinners": 38,
            "BlocDividend": 144.2500,
            "CompanyId": "SALotteries",
            "CompanyNumberOfWinners": 4,
            "CompanyDividend": 144.2500,
            "PoolTransferType": "NONE",
            "PoolTransferredTo": 0
          },
          {
            "Division": 5,
            "BlocNumberOfWinners": 240,
            "BlocDividend": 39.8000,
            "CompanyId": "SALotteries",
            "CompanyNumberOfWinners": 12,
            "CompanyDividend": 39.8000,
            "PoolTransferType": "NONE",
            "PoolTransferredTo": 0
          },
          {
            "Division": 6,
            "BlocNumberOfWinners": 1164,
            "BlocDividend": 22.7000,
            "CompanyId": "SALotteries",
            "CompanyNumberOfWinners": 83,
            "CompanyDividend": 22.7000,
            "PoolTransferType": "NONE",
            "PoolTransferredTo": 0
          },
          {
            "Division": 7,
            "BlocNumberOfWinners": 4811,
            "BlocDividend": 15.2000,
            "CompanyId": "SALotteries",
            "CompanyNumberOfWinners": 352,
            "CompanyDividend": 15.2000,
            "PoolTransferType": "NONE",
            "PoolTransferredTo": 0
          },
          {
            "Division": 8,
            "BlocNumberOfWinners": 13086,
            "BlocDividend": 10.8000,
            "CompanyId": "SALotteries",
            "CompanyNumberOfWinners": 965,
            "CompanyDividend": 10.8000,
            "PoolTransferType": "NONE",
            "PoolTransferredTo": 0
          }
        ]
      },
      {
        "ProductId": "Powerball",
        "DrawNumber": 1051,
        "DrawDate": "2016-07-07T00:00:00",
        "DrawDisplayName": "Powerball Draw 1051",
        "DrawLogoUrl": "http://media.tatts.com/TattsServices/Lotto/Products/Powerball_v1.png",
        "PrimaryNumbers": [
          4,
          22,
          23,
          32,
          14,
          9
        ],
        "SecondaryNumbers": [
          19
        ],
        "TicketNumbers": null,
        "Dividends": [
          {
            "Division": 1,
            "BlocNumberOfWinners": 0,
            "BlocDividend": 0.0,
            "CompanyId": "SALotteries",
            "CompanyNumberOfWinners": 0,
            "CompanyDividend": 0.0,
            "PoolTransferType": "TO_DRAW",
            "PoolTransferredTo": 1052
          },
          {
            "Division": 2,
            "BlocNumberOfWinners": 4,
            "BlocDividend": 60673.5500,
            "CompanyId": "SALotteries",
            "CompanyNumberOfWinners": 1,
            "CompanyDividend": 60673.5500,
            "PoolTransferType": "NONE",
            "PoolTransferredTo": 0
          },
          {
            "Division": 3,
            "BlocNumberOfWinners": 46,
            "BlocDividend": 5519.4500,
            "CompanyId": "SALotteries",
            "CompanyNumberOfWinners": 4,
            "CompanyDividend": 5519.4500,
            "PoolTransferType": "NONE",
            "PoolTransferredTo": 0
          },
          {
            "Division": 4,
            "BlocNumberOfWinners": 818,
            "BlocDividend": 173.4500,
            "CompanyId": "SALotteries",
            "CompanyNumberOfWinners": 28,
            "CompanyDividend": 173.4500,
            "PoolTransferType": "NONE",
            "PoolTransferredTo": 0
          },
          {
            "Division": 5,
            "BlocNumberOfWinners": 1602,
            "BlocDividend": 67.6000,
            "CompanyId": "SALotteries",
            "CompanyNumberOfWinners": 86,
            "CompanyDividend": 67.6000,
            "PoolTransferType": "NONE",
            "PoolTransferredTo": 0
          },
          {
            "Division": 6,
            "BlocNumberOfWinners": 24284,
            "BlocDividend": 38.9000,
            "CompanyId": "SALotteries",
            "CompanyNumberOfWinners": 1293,
            "CompanyDividend": 38.9000,
            "PoolTransferType": "NONE",
            "PoolTransferredTo": 0
          },
          {
            "Division": 7,
            "BlocNumberOfWinners": 30106,
            "BlocDividend": 28.1500,
            "CompanyId": "SALotteries",
            "CompanyNumberOfWinners": 1634,
            "CompanyDividend": 28.1500,
            "PoolTransferType": "NONE",
            "PoolTransferredTo": 0
          },
          {
            "Division": 8,
            "BlocNumberOfWinners": 142801,
            "BlocDividend": 13.6000,
            "CompanyId": "SALotteries",
            "CompanyNumberOfWinners": 7675,
            "CompanyDividend": 13.6000,
            "PoolTransferType": "NONE",
            "PoolTransferredTo": 0
          }
        ]
      },
      {
        "ProductId": "MonWedLotto",
        "DrawNumber": 3571,
        "DrawDate": "2016-07-06T00:00:00",
        "DrawDisplayName": "Mon&Wed X Lotto Draw 3571",
        "DrawLogoUrl": "http://media.tatts.com/TattsServices/Lotto/Products/MonWedXLotto_v1.png",
        "PrimaryNumbers": [
          2,
          8,
          45,
          29,
          15,
          41
        ],
        "SecondaryNumbers": [
          37,
          24
        ],
        "TicketNumbers": null,
        "Dividends": [
          {
            "Division": 1,
            "BlocNumberOfWinners": 0,
            "BlocDividend": 0.0,
            "CompanyId": "SALotteries",
            "CompanyNumberOfWinners": 0,
            "CompanyDividend": 0.0,
            "PoolTransferType": "TO_DRAW",
            "PoolTransferredTo": 3572
          },
          {
            "Division": 2,
            "BlocNumberOfWinners": 5,
            "BlocDividend": 11298.8500,
            "CompanyId": "SALotteries",
            "CompanyNumberOfWinners": 0,
            "CompanyDividend": 11298.8500,
            "PoolTransferType": "NONE",
            "PoolTransferredTo": 0
          },
          {
            "Division": 3,
            "BlocNumberOfWinners": 157,
            "BlocDividend": 556.9000,
            "CompanyId": "SALotteries",
            "CompanyNumberOfWinners": 7,
            "CompanyDividend": 556.9000,
            "PoolTransferType": "NONE",
            "PoolTransferredTo": 0
          },
          {
            "Division": 4,
            "BlocNumberOfWinners": 7996,
            "BlocDividend": 31.1000,
            "CompanyId": "SALotteries",
            "CompanyNumberOfWinners": 588,
            "CompanyDividend": 31.1000,
            "PoolTransferType": "NONE",
            "PoolTransferredTo": 0
          },
          {
            "Division": 5,
            "BlocNumberOfWinners": 19133,
            "BlocDividend": 18.5000,
            "CompanyId": "SALotteries",
            "CompanyNumberOfWinners": 1271,
            "CompanyDividend": 18.5000,
            "PoolTransferType": "NONE",
            "PoolTransferredTo": 0
          },
          {
            "Division": 6,
            "BlocNumberOfWinners": 38803,
            "BlocDividend": 15.4500,
            "CompanyId": "SALotteries",
            "CompanyNumberOfWinners": 2495,
            "CompanyDividend": 15.4500,
            "PoolTransferType": "NONE",
            "PoolTransferredTo": 0
          }
        ]
      },
      {
        "ProductId": "OzLotto",
        "DrawNumber": 1168,
        "DrawDate": "2016-07-05T00:00:00",
        "DrawDisplayName": "Oz Lotto Draw 1168",
        "DrawLogoUrl": "http://media.tatts.com/TattsServices/Lotto/Products/OzLotto_v1.png",
        "PrimaryNumbers": [
          43,
          41,
          37,
          14,
          9,
          2,
          31
        ],
        "SecondaryNumbers": [
          1,
          17
        ],
        "TicketNumbers": null,
        "Dividends": [
          {
            "Division": 1,
            "BlocNumberOfWinners": 1,
            "BlocDividend": 20000000.0000,
            "CompanyId": "SALotteries",
            "CompanyNumberOfWinners": 0,
            "CompanyDividend": 20000000.0000,
            "PoolTransferType": "NONE",
            "PoolTransferredTo": 0
          },
          {
            "Division": 2,
            "BlocNumberOfWinners": 6,
            "BlocDividend": 44035.5000,
            "CompanyId": "SALotteries",
            "CompanyNumberOfWinners": 0,
            "CompanyDividend": 44035.5000,
            "PoolTransferType": "NONE",
            "PoolTransferredTo": 0
          },
          {
            "Division": 3,
            "BlocNumberOfWinners": 130,
            "BlocDividend": 4184.3500,
            "CompanyId": "SALotteries",
            "CompanyNumberOfWinners": 7,
            "CompanyDividend": 4184.3500,
            "PoolTransferType": "NONE",
            "PoolTransferredTo": 0
          },
          {
            "Division": 4,
            "BlocNumberOfWinners": 899,
            "BlocDividend": 311.2000,
            "CompanyId": "SALotteries",
            "CompanyNumberOfWinners": 46,
            "CompanyDividend": 311.2000,
            "PoolTransferType": "NONE",
            "PoolTransferredTo": 0
          },
          {
            "Division": 5,
            "BlocNumberOfWinners": 6703,
            "BlocDividend": 48.7000,
            "CompanyId": "SALotteries",
            "CompanyNumberOfWinners": 322,
            "CompanyDividend": 48.7000,
            "PoolTransferType": "NONE",
            "PoolTransferredTo": 0
          },
          {
            "Division": 6,
            "BlocNumberOfWinners": 152091,
            "BlocDividend": 24.5500,
            "CompanyId": "SALotteries",
            "CompanyNumberOfWinners": 7716,
            "CompanyDividend": 24.5500,
            "PoolTransferType": "NONE",
            "PoolTransferredTo": 0
          },
          {
            "Division": 7,
            "BlocNumberOfWinners": 274614,
            "BlocDividend": 15.2000,
            "CompanyId": "SALotteries",
            "CompanyNumberOfWinners": 13660,
            "CompanyDividend": 15.2000,
            "PoolTransferType": "NONE",
            "PoolTransferredTo": 0
          }
        ]
      },
      {
        "ProductId": "TattsLotto",
        "DrawNumber": 3647,
        "DrawDate": "2016-07-02T00:00:00",
        "DrawDisplayName": "Saturday X Lotto Draw 3647",
        "DrawLogoUrl": "http://media.tatts.com/TattsServices/Lotto/Products/SatXLotto_v1.png",
        "PrimaryNumbers": [
          5,
          20,
          16,
          41,
          12,
          31
        ],
        "SecondaryNumbers": [
          10,
          29
        ],
        "TicketNumbers": null,
        "Dividends": [
          {
            "Division": 1,
            "BlocNumberOfWinners": 4,
            "BlocDividend": 1014584.2900,
            "CompanyId": "SALotteries",
            "CompanyNumberOfWinners": 1,
            "CompanyDividend": 1014584.2900,
            "PoolTransferType": "NONE",
            "PoolTransferredTo": 0
          },
          {
            "Division": 2,
            "BlocNumberOfWinners": 70,
            "BlocDividend": 7870.3500,
            "CompanyId": "SALotteries",
            "CompanyNumberOfWinners": 5,
            "CompanyDividend": 7870.3500,
            "PoolTransferType": "NONE",
            "PoolTransferredTo": 0
          },
          {
            "Division": 3,
            "BlocNumberOfWinners": 1040,
            "BlocDividend": 1143.1000,
            "CompanyId": "SALotteries",
            "CompanyNumberOfWinners": 87,
            "CompanyDividend": 1143.1000,
            "PoolTransferType": "NONE",
            "PoolTransferredTo": 0
          },
          {
            "Division": 4,
            "BlocNumberOfWinners": 52153,
            "BlocDividend": 34.4500,
            "CompanyId": "SALotteries",
            "CompanyNumberOfWinners": 4012,
            "CompanyDividend": 34.4500,
            "PoolTransferType": "NONE",
            "PoolTransferredTo": 0
          },
          {
            "Division": 5,
            "BlocNumberOfWinners": 140685,
            "BlocDividend": 21.4500,
            "CompanyId": "SALotteries",
            "CompanyNumberOfWinners": 10248,
            "CompanyDividend": 21.4500,
            "PoolTransferType": "NONE",
            "PoolTransferredTo": 0
          },
          {
            "Division": 6,
            "BlocNumberOfWinners": 310845,
            "BlocDividend": 12.5000,
            "CompanyId": "SALotteries",
            "CompanyNumberOfWinners": 23478,
            "CompanyDividend": 12.5000,
            "PoolTransferType": "NONE",
            "PoolTransferredTo": 0
          }
        ]
      },
      {
        "ProductId": "Super66",
        "DrawNumber": 3647,
        "DrawDate": "2016-07-02T00:00:00",
        "DrawDisplayName": "Super 66 Draw 3647",
        "DrawLogoUrl": "http://media.tatts.com/TattsServices/Lotto/Products/Super66SA_v1.png",
        "PrimaryNumbers": [
          5,
          6,
          2,
          1,
          3,
          1
        ],
        "SecondaryNumbers": [

        ],
        "TicketNumbers": null,
        "Dividends": [
          {
            "Division": 1,
            "BlocNumberOfWinners": 1,
            "BlocDividend": 23734.9000,
            "CompanyId": "SALotteries",
            "CompanyNumberOfWinners": 0,
            "CompanyDividend": 23734.9000,
            "PoolTransferType": "NONE",
            "PoolTransferredTo": 0
          },
          {
            "Division": 2,
            "BlocNumberOfWinners": 3,
            "BlocDividend": 6666.0000,
            "CompanyId": "SALotteries",
            "CompanyNumberOfWinners": 0,
            "CompanyDividend": 6666.0000,
            "PoolTransferType": "NONE",
            "PoolTransferredTo": 0
          },
          {
            "Division": 3,
            "BlocNumberOfWinners": 24,
            "BlocDividend": 666.0000,
            "CompanyId": "SALotteries",
            "CompanyNumberOfWinners": 4,
            "CompanyDividend": 666.0000,
            "PoolTransferType": "NONE",
            "PoolTransferredTo": 0
          },
          {
            "Division": 4,
            "BlocNumberOfWinners": 342,
            "BlocDividend": 66.0000,
            "CompanyId": "SALotteries",
            "CompanyNumberOfWinners": 35,
            "CompanyDividend": 66.0000,
            "PoolTransferType": "NONE",
            "PoolTransferredTo": 0
          },
          {
            "Division": 5,
            "BlocNumberOfWinners": 3183,
            "BlocDividend": 6.6000,
            "CompanyId": "SALotteries",
            "CompanyNumberOfWinners": 243,
            "CompanyDividend": 6.6000,
            "PoolTransferType": "NONE",
            "PoolTransferredTo": 0
          }
        ]
      },
      {
        "ProductId": "Pools",
        "DrawNumber": 1614,
        "DrawDate": "2016-07-02T00:00:00",
        "DrawDisplayName": "The Pools Draw 1614",
        "DrawLogoUrl": "http://media.tatts.com/TattsServices/Lotto/Products/ThePools_v1.png",
        "PrimaryNumbers": [
          38,
          30,
          18,
          32,
          37,
          33
        ],
        "SecondaryNumbers": [
          29
        ],
        "TicketNumbers": null,
        "Dividends": [
          {
            "Division": 1,
            "BlocNumberOfWinners": 1,
            "BlocDividend": 314987.1100,
            "CompanyId": "SALotteries",
            "CompanyNumberOfWinners": 0,
            "CompanyDividend": 314987.1100,
            "PoolTransferType": "NONE",
            "PoolTransferredTo": 0
          },
          {
            "Division": 2,
            "BlocNumberOfWinners": 4,
            "BlocDividend": 468.7000,
            "CompanyId": "SALotteries",
            "CompanyNumberOfWinners": 1,
            "CompanyDividend": 468.7000,
            "PoolTransferType": "NONE",
            "PoolTransferredTo": 0
          },
          {
            "Division": 3,
            "BlocNumberOfWinners": 84,
            "BlocDividend": 66.9500,
            "CompanyId": "SALotteries",
            "CompanyNumberOfWinners": 5,
            "CompanyDividend": 66.9500,
            "PoolTransferType": "NONE",
            "PoolTransferredTo": 0
          },
          {
            "Division": 4,
            "BlocNumberOfWinners": 1819,
            "BlocDividend": 7.7500,
            "CompanyId": "SALotteries",
            "CompanyNumberOfWinners": 101,
            "CompanyDividend": 7.7500,
            "PoolTransferType": "NONE",
            "PoolTransferredTo": 0
          },
          {
            "Division": 5,
            "BlocNumberOfWinners": 2122,
            "BlocDividend": 5.3000,
            "CompanyId": "SALotteries",
            "CompanyNumberOfWinners": 121,
            "CompanyDividend": 5.3000,
            "PoolTransferType": "NONE",
            "PoolTransferredTo": 0
          }
        ]
      }]
  }

}
