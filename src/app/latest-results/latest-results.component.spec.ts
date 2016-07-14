/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { LottoService } from '../lotto.service';
import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { LatestResultsComponent } from './latest-results.component';

describe('Component: LatestResults', () => {
  it('should create an instance', () => {
     inject([LottoService], (Component: LottoService) => {
    expect(Component).toBeTruthy();
  });})});

