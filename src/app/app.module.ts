import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { AccountPage } from '../pages/account/account';
import { TabsPage } from '../pages/tabs/tabs';

// action sheets
import { BasicPage as ActionSheetBasicPage } from '../pages/action-sheets/basic/pages';

import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { UserData } from '../providers/user-data';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    AccountPage,
    TabsPage,
    ActionSheetBasicPage,
    AccountPage,
    LoginPage,
    SignupPage,
    TutorialPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    AccountPage,
    TabsPage,
    ActionSheetBasicPage,
    AccountPage,
    LoginPage,
    SignupPage,
    TutorialPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, UserData, Storage]
})
export class AppModule {}
