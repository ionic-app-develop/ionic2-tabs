import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Storage } from '@ionic/storage';

import { TabsPage } from '../pages/tabs/tabs';

import { TutorialPage } from '../pages/tutorial/tutorial';
import { UserData } from '../providers/user-data';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
   rootPage = null;

  constructor(
    public userData: UserData,
    public platform: Platform,
    public storage: Storage
    ) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
    });

    this.storage.remove('hasSeenTutorial');

    // Check if the user has already seen the tutorial
    this.userData.checkHasSeenTutorial().then((hasSeenTutorial) => {
      if (hasSeenTutorial === null) {
        // User has not seen tutorial
        this.rootPage = TutorialPage;
      } else {
        // User has seen tutorial
        this.rootPage = TabsPage;
      }
    });
  }
}
