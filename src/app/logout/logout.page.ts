import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private _acroute: ActivatedRoute, private _route: Router) { }

  ngOnInit() {
    localStorage.setItem('userid','');
    localStorage.setItem('email','');
    this._route.navigate(['home']);
  }

}
