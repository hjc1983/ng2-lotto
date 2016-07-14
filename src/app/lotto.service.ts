import { Injectable } from '@angular/core';
import { LOTTORESULTS } from './mock-lottos';
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
    private baseUrl: string;

    constructor(private http: Http) {
        this.baseUrl = 'https://thelott.com/sales/vmax/web';
        //this.dataStore = { todos: [] };
        this._lotto$ = <Subject<LottoServeStatus>>new Subject();
    }

    get lotto$() {
        return this._lotto$.asObservable();
    }

    checkHealth() {
        this.http.get(`${this.baseUrl}/status`).map(response => response.json()).subscribe(data => {
            //this.dataStore.todos = data;
            this._lotto$.next(data);
        }, error => console.log('Could not load data.'));
    }


    getLatestResults() {
        //return LOTTORESULTS;
        return Promise.resolve(LOTTORESULTS);
    }

    // See the "delay" on fetching data 
    getLatestResultsSlowly() {
        return new Promise<DrawResult[]>(resolve =>
            setTimeout(() => resolve(LOTTORESULTS), 2000) // 2 seconds
        );
    }
}