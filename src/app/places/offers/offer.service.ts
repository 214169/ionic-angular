import { Injectable } from '@angular/core';
import { Offer } from './offer.model';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  private _offers: Offer[] = [
    new Offer('p1', 'India', 'Taj Mahal', 'http://www.transindiatravels.com/wp-content/uploads/the-taj-mahal-agra.jpg', 200),
    new Offer('p2', 'New York', 'Liberty Island', 'https://www.planetware.com/photos-large/USNY/usa-best-places-new-york.jpg', 420),
    new Offer('p3',
              'Paris',
              'Eiffel Tower',
              'https://d39gusjpdm7p1o.cloudfront.net/data/layout_grouping/static_page_step/20784_a330628091ede7eb1548d6cda58e0357.jpg?ver=1477297804', 520)
  ];

  get offers() {
    return [...this._offers];
  }

  getOffer(id: string) {
    return {...this._offers.find(o => o.id === id)};
  }
  constructor() { }
}
