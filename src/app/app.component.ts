import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/homepage',
      icon: 'home'
    },
    {
      title: 'Incomes',
      url: '/income',
      icon: 'list'
    },
    {
      title: 'Expenses',
      url: '/expense',
      icon: 'list'
    },
    {
      title: 'Notes',
      url: '/note',
      icon: 'list'
    },
    {
      title: 'Edit Profile',
      url: '/edit-profile',
      icon: 'person'
    },
    {
      title: 'Contact Us',
      url: '/contact',
      icon: 'help-circle'
    },
    {
      title: 'Logout',
      url: '/logout',
      icon: 'log-out'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
