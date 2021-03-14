import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { promise } from 'protractor';
const mediaConstraints = {
  audio:true,
  video:{width:720,height:540}
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements AfterViewInit {
private localStream:MediaStream;
@ViewChild('local_video') localVideo:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit():void{
   this.requestMediaDevices();
  }
  private async requestMediaDevices(): Promise<void> {
    this.localStream= await navigator.mediaDevices.getUserMedia(mediaConstraints);
    //this.localVideo.nativeElement.srcObject= this.localStream;
    this.pauseLocalVideo();
  }
  pauseLocalVideo():void{
    this.localStream.getTracks().forEach(track =>{
      track.enabled=false;
    });
    this.localVideo.nativeElement.srcObject= undefined;
  }
  startLocalVideo():void{
    this.localStream.getTracks().forEach(track =>{
      track.enabled=true;
    });
    this.localVideo.nativeElement.srcObject= this.localStream;
  }

}
