import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { url } from '../../environments/environment';
import { note } from '../Classes/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private note: string = url.endpoint + 'note/';
  private noteone: string = url.endpoint + 'noteone/';

  constructor(private _http:HttpClient) { }
  getNoteByFkuserid(fkuserid){    
    return this._http.get(this.noteone+fkuserid);
  }
  getNoteByNid(nid){
    return this._http.get(this.note+nid);
  }
  addNote(item){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.note,body,{headers:head1});
  }
  deleteNote(eid){
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.note+eid,{headers:head1});
  }
  updateNote(item){
    let body=JSON.stringify(item);
      let head1=new HttpHeaders().set('Content-Type','application/json');
      return this._http.put(this.note+item.nid,body,{headers:head1});
  }
}
