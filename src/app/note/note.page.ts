import { Component, OnInit } from '@angular/core';
import { note } from '../Classes/note';
import { NoteService } from '../Services/note.service';
import { UserService } from '../Services/user.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-note',
  templateUrl: './note.page.html',
  styleUrls: ['./note.page.scss'],
})
export class NotePage implements OnInit {

  constructor(private _note: NoteService, private _user: UserService, private _acroute: ActivatedRoute, private _route: Router) { }

  userid: number;
  email: string;
  note: note[];
  ngOnInit() {
    this.userid = Number(localStorage.getItem('userid'));
    this.email = localStorage.getItem('email');
    this._note.getNoteByFkuserid(this.userid).subscribe(
      (data: note[]) => {
        this.note = data;
      }
    );
  }
  onClickEditNote(nid){
    this._route.navigate(['edit-note',nid]);
  }
  onClickDeleteNote(nid){
    this._note.deleteNote(nid).subscribe(
      (data:any)=>{
        alert("Note has been deleted.");
        this.ngOnInit();
      }
    );
  }
  onClickAddNote() {
    this._route.navigate(['add-note']);
  }
  onClickAddIncome(){
    this._route.navigate(['add-income-expense']);
  }
  onClickAddExpense(){
    this._route.navigate(['add-income-expense']);
  }
  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
    }, 2000);
    this.ngOnInit();
  }
}
