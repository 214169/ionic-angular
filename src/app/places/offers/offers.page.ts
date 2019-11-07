import { Component, OnInit } from '@angular/core';
import { OfferService } from './offer.service';
import { Offer } from './offer.model';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  loadedOffers: Offer[];
  constructor(private offerService: OfferService, private router: Router) { }

  ngOnInit() {
    this.loadedOffers = this.offerService.offers;
  }

  onEdit(offerId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.router.navigateByUrl(`/places/places-tabs/offers/edit/${offerId}`);
  }

  getDummyDate() {
    return new Date();
  }
}
