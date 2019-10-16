import { Component, OnInit } from '@angular/core';
import { note } from '../Classes/note';
import { NoteService } from '../Services/note.service';
import { UserService } from '../Services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.page.html',
  styleUrls: ['./add-note.page.scss'],
})
export class AddNotePage implements OnInit {
  title:string;
  note:string;
  userid: number;
  email: string;  
  constructor(public loadingController: LoadingController,private _note: NoteService, private _user: UserService, private _acroute: ActivatedRoute, private _route: Router) { }

  ngOnInit() {
    this.presentLoadingWithOptions(4000);
    this.userid = Number(localStorage.getItem('userid'));
    this.email = localStorage.getItem('email');
  }
  addnote(){
    this._note.addNote(new note(0,this.userid,"",this.title,this.note)).subscribe(
      (data:any)=>{
        alert("Note has been added.");
        this._route.navigate(['note']);
      }
    );
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
