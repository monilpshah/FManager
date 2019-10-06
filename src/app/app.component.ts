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
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
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
      title: 'Add Notes',
      url: '/add-note',
      icon: 'list'
    },
    {
      title: 'Edit Note',
      url: '/edit-note',
      icon: 'list'
    },
    {
      title: 'Add Income / Expense',
      url: '/add-income-expense',
      icon: 'list'
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
