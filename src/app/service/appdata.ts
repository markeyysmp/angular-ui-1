import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Appdata {
  members = Array<MemberData>();
  constructor() { }
}

export class MemberData {
  id : number = 0;
  fullname : string = '';
  image : string = '';
}