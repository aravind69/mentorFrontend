import { Component, OnInit, ViewChild, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { MitronPeer } from './call-dash.domain';
import SimplePeer from 'simple-peer';
import { ActivatedRoute } from '@angular/router';
import { SignalMessage, SignalingService } from 'app/_services/signaling.service';

@Component({
  selector: 'app-collabration',
  templateUrl: './collabration.component.html',
  styleUrls: ['./collabration.component.css']
})
export class CollabrationComponent implements OnInit {
  roomName: string
  mitronPeers: Array<MitronPeer> = new Array()

  @ViewChild('myVideo')
  myVideo: ElementRef<HTMLVideoElement>

  @ViewChildren('peerVideo')
  peerVideos: QueryList<ElementRef<HTMLVideoElement>>

  constructor(
    private signalingService: SignalingService,
    private actRt: ActivatedRoute
  ) { }

  ngOnInit(): void {

    
  }

 
}
