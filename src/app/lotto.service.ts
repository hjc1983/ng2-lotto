import { Injectable } from '@angular/core';
//import { LOTTORESULTS } from './mock-lottos';
import { DrawResult } from './DrawResult.model';
import {LottoServeStatus} from './LottoServeStatus.model'

import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class LottoService {
    //REST Example - http://plnkr.co/edit/yMBoVkxohwhPig5COgkU?p=preview
    private _lotto$: Subject<LottoServeStatus>;
    private _lottoDR$: Subject<DrawResult>;
    private baseUrl: string;

    constructor(private http: Http) {
        this.baseUrl = 'https://thelott.com/sales/vmax/web';
        //this.dataStore = { todos: [] };
        this._lotto$ = <Subject<LottoServeStatus>>new Subject();
        this._lottoDR$ = <Subject<DrawResult>>new Subject();
    }

    get lotto$() {
        return this._lotto$.asObservable();
    }
    get lottoDR$() {
        return this._lottoDR$.asObservable();
    }

    checkHealth() {
        this.http.get(`${this.baseUrl}/status`).map(response => response.json()).subscribe(data => {
            //this.dataStore.todos = data;
            this._lotto$.next(data);
        }, error => console.log('Could not load data.'));
    }


    getLatestResults() {

        //thelott.com/sales/vmax/web/data/lotto/latestresults
        this.http.post(`${this.baseUrl}/data/lotto/latestresults`, '{"CompanyId":"SALotteries","MaxDrawCountPerProduct":1,"OptionalProductFilter":["Super66","TattsLotto","MonWedLotto","Powerball","OzLotto","Keno","SetForLife","Pools"]}')
            .map(response => response.json()).subscribe(data => {
                //this.dataStore.todos = data;
                this._lottoDR$.next(data);
            }, error => console.log('Could not load data.'));
    }
}