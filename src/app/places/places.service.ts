import { Injectable } from '@angular/core';
import { Place} from './place.model';
import { AuthService } from '../auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [
    new Place('p1',
              'India',
              'Taj Mahal',
              'http://www.transindiatravels.com/wp-content/uploads/the-taj-mahal-agra.jpg', 
              200,
              new Date('2019-01-01'),
              new Date('2020-12-31'),
              'abc'),
    new Place('p2',
              'New York',
              'Liberty Island',
              'https://www.planetware.com/photos-large/USNY/usa-best-places-new-york.jpg', 
              420,
              new Date('2019-01-01'),
              new Date('2020-12-31'),
              'abc'),
    new Place('p3',
              'Paris',
              'Eiffel Tower',
              'https://d39gusjpdm7p1o.cloudfront.net/data/layout_grouping/static_page_step/20784_a330628091ede7eb1548d6cda58e0357.jpg?ver=1477297804',
              520,
              new Date('2019-01-01'),
              new Date('2020-12-31'),
              'abc')
  ];

  constructor(private authService: AuthService ) { }

  get places() {
    return [...this._places];
  }

  getPlace(id: string) {
    return {...this._places.find(o => o.id === id)};
  }

  addPlace(title: string,
           description: string,
           price: number,
           dateFrom: Date,
           dateTo: Date
           ) {
                 const newPlace = new Place(
                              Math.random().toString(),
                              title,
                              description,
                              'https://www.planetware.com/photos-large/USNY/usa-best-places-new-york.jpg',
                              price,
                              dateFrom,
                              dateTo,
                              this.authService.userID
                              );
                 this._places.push(newPlace);
  }
}
