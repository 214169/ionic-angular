import { Component, OnInit } from '@angular/core';
import { Offer } from '../offer.model';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { OfferService } from '../offer.service';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {
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
