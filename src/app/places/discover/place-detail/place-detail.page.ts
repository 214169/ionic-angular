import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../../places.service';
import { Place } from '../../place.model';
import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component';
@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place;
  constructor(
              private navCtrl: NavController,
              private activateRoute: ActivatedRoute,
              private placeService: PlacesService,
              private modalCtrl: ModalController) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
         this.navCtrl.navigateBack('/places/places-tabs/discover');
         return;
      }
      this.place = this.placeService.getPlace(paramMap.get('placeId'));
    });
  }

  OnBookPlace() {
    //this.navCtrl.navigateBack('places/places-tabs/discover');
    this.modalCtrl.create({ component: CreateBookingComponent  }).then(
      modalEle => { modalEle.present();
    });
  }

}
