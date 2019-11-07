import { Component, OnInit } from '@angular/core';
import { Place } from '../../place.model';
import { Offer } from '../offer.model';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { OfferService } from '../offer.service';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {
  offer: Offer;
  constructor(private activateRoute: ActivatedRoute, private navCtrl: NavController, private offerService: OfferService) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('offerId')) {
         this.navCtrl.navigateBack('/places/places-tabs/offers');
         return;
      }
      this.offer = this.offerService.getOffer(paramMap.get('offerId'));
    });
  }
}
