import { Component, OnInit } from '@angular/core';
import { note } from '../Classes/note';
import { NoteService } from '../Services/note.service';
import { UserService } from '../Services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.page.html',
  styleUrls: ['./edit-note.page.scss'],
})
export class EditNotePage implements OnInit {

  constructor(private _note: NoteService, private _user: UserService, private _acroute: ActivatedRoute, private _route: Router) { }
  userid: number;
  email: string;
  nid:number;
  note:string;
  title:string;
  ngOnInit() {
    this.userid = Number(localStorage.getItem('userid'));
    this.email = localStorage.getItem('email');
    this.nid=this._acroute.snapshot.params['nid'];
    this._note.getNoteByNid(this.nid).subscribe(
      (data:any)=>{
        this.title=data[0].title;
        this.note=data[0].note;
      }
    );
  }
  saveNote(){
    this._note.updateNote(new note(this.nid,this.userid,"",this.title,this.note)).subscribe(
      (data:any)=>{
        alert("Note has been edited.");
        this._route.navigate(['note']);
      }
    );
  }
}
