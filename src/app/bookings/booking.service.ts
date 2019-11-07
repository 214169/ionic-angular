import { Injectable } from '@angular/core';
import { Booking } from './booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private _bookings: Booking[] = [
    {
      id: "xyz",
      placeId: "p1",
      userId: "abc",
      placeTitle:"Manhaton",
      guestNumber: 2
    },
    {
      id: "lmn",
      placeId: "p2",
      userId: "opq",
      placeTitle:"Paris",
      guestNumber: 2
    },
    {
      id: "rst",
      placeId: "p3",
      userId: "uvw",
      placeTitle:"India",
      guestNumber: 3
    }
];

  get bookings() {
    return [...this._bookings];
  }

  constructor() { }
}
