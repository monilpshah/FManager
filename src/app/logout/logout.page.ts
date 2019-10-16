import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(public loadingController: LoadingController,private _acroute: ActivatedRoute, private _route: Router) { }

  ngOnInit() {
    this.presentLoadingWithOptions(4000);
    localStorage.setItem('userid','');
    localStorage.setItem('email','');
    this._route.navigate(['home']);
  }
  async presentLoadingWithOptions(ms) {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: ms,
      message: 'Loading...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }
}
