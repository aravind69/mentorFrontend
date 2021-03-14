import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { SignalData } from 'simple-peer';

@Injectable({
  providedIn: 'root'
})
export class SignalingService {

  
}

export interface SignalMessage {
  callerId?: string
  calleeId?: string,
  signalData?: SignalData,
  msg?: string,
  roomName?: string
}
