import { Component } from '@angular/core';

import { Platform, NavController, ActionSheetController } from 'ionic-angular';
import { ActionSheet } from 'ionic-native';

// action sheets
import { BasicPage as ActionSheetBasicPage } from '../action-sheets/basic/pages';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public platform: Platform, public navCtrl: NavController, public actionSheetCtrl: ActionSheetController) {}

  angular() {
   //  let actionSheet = this.actionSheetCtrl.create({
   //   title: 'Modify your album',
   //   buttons: [
   //     {
   //       text: 'Destructive',
   //       role: 'destructive',
   //       handler: () => {
   //         console.log('Destructive clicked');
   //       }
   //     },
   //     {
   //       text: 'Archive',
   //       handler: () => {
   //         console.log('Archive clicked');
   //       }
   //     },
   //     {
   //       text: 'Cancel',
   //       role: 'cancel',
   //       handler: () => {
   //         console.log('Cancel clicked');
   //       }
   //     }
   //   ]
   // });

   // actionSheet.present();
   this.navCtrl.push(ActionSheetBasicPage);
  }

  native() {
    let buttonLabels = ['Share via Facebook', 'Share via Twitter'];
    ActionSheet.show({
      'title': 'What do you want with this image?',
      'buttonLabels': buttonLabels,
      'addCancelButtonWithLabel': 'Cancel',
      'addDestructiveButtonWithLabel' : 'Delete'
    }).then((buttonIndex: number) => {
      console.log('Button pressed: ' + buttonIndex);
    });
  }
}
