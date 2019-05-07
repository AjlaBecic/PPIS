import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicateService {


  @Output() createActivity: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  emitCreateActivity(value: boolean){
    this.createActivity.emit(value);
  }
}
