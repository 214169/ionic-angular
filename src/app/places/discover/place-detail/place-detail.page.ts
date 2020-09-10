import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, ActionSheetController } from '@ionic/angular';
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
              private modalCtrl: ModalController,
              private actionCtrl: ActionSheetController) { }

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
      this.actionCtrl.create({
        header: 'Choose an action',
        buttons: [
          {
            text: 'Select Date',
            handler: () => { this.openBookingModal('select'); }
          },
          {
            text: 'Random Date',
            handler: () => { this.openBookingModal('random'); }
          },
          {
            text: 'Cancel',
            role: 'cancel'
          }
        ]
      }).then(actionSheetEle => {
        actionSheetEle.present();
      });
  }

  openBookingModal(mode: 'select' | 'random') {
    console.log(mode);
    this.modalCtrl.create({
      component: CreateBookingComponent,
      componentProps: { selectedPlace: this.place, selectedMode: mode } })
        .then(
        modalEle => {
        modalEle.present();
        return modalEle.onDidDismiss();
        })
        .then( resultData => {
        console.log(resultData.data, resultData.role);
        if (resultData.role === 'confirm') {
        console.log('booked');
        }
    });
  }

}