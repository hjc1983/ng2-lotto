import { Injectable } from '@angular/core';
import { LOTTORESULTS } from './mock-lottos';
import { DrawResult } from './DrawResult.model';

@Injectable()
export class LottoService {
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