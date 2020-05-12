import { Injectable } from '@angular/core';

export interface DoNotServiceCustomer {
  reason: string;
  name: string;
  car: string;
  phone: string;
  vin: string;
}

export interface Market {
  marketId: number;
  name: string;
  gmtOffset: string;
  map: string;
  DoNotServiceList: Array<DoNotServiceCustomer>;
}

@Injectable()
export class MarketService {

  constructor() { }

}