import { Component, OnInit, Input } from '@angular/core';
import { DrawResult } from '../DrawResult.model';

@Component({
  moduleId: module.id,
  selector: 'my-draw-detail',
  template: `

    <div *ngIf="draw">
      
      <h2>{{draw.DrawDisplayName}}</h2>
      <img src="{{draw.DrawLogoUrl}}" height="128px" width="128px" /><br/>
      Last draw: {{draw.DrawDate}}, # {{draw.DrawNumber}}<br/>
      <div class="winningNum">
      PrimaryNumbers : 
      <span *ngFor="let num of draw.PrimaryNumbers"><label>{{num}}</label>, </span>
      </div>
      <div class="BonusNum">
      SecondaryNumbers : 
      <span *ngFor="let num of draw.SecondaryNumbers"><label>{{num}}</label>, </span>
      </div>
      <div  *ngIf="draw.Dividends.length >0" class="divis-table">
       <table style="display: inline-block">
        <tbody>
         <tr>
           <th></th>
           <th>Division Prize</th>
           <th>Div Prize Pool</th>
           <th>Winners</th>
           <th>SA Winners</th>
         </tr>
         <tr *ngFor="let d of draw.Dividends">
          <td>{{d.Division}}</td>
          <td>{{d.BlocDividend}}</td>
          <td>{{d.BlocDividend/d.BlocNumberOfWinners }}</td>
          <td>{{d.BlocNumberOfWinners}}</td>
          <td>{{d.CompanyNumberOfWinners}}</td>
          <!--td>{{d.CompanyDividend}}</td>
          <td>{{d.PoolTransferType}}</td>
          <td>{{d.PoolTransferredTo}}</td-->
         </tr> 
        </tbody>
       </table>
      </div>
      <div>
        <input type="hidden" [(ngModel)]="draw.DrawDisplayName" placeholder="DrawDisplayName"/>
      </div>
    </div>`
})
export class LatestResultsDetailComponent  implements OnInit {
  @Input() draw: DrawResult;

  constructor() { }

  ngOnInit() { }

}

