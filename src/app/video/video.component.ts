import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video',
  standalone: true,
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
 
})
export class VideoComponent implements OnInit {
  @ViewChild('htmlVideo', {static:true}) private videoElement!: ElementRef<HTMLVideoElement>;

  constructor() { }

  ngOnInit() {
    this.assignEvents();
  }

  assignEvents(){    
    // this.videoElement.nativeElement.addEventListener('canplay',()=>{
    //   console.log('This video is playable - from canPlay');
    // });
    // this.videoElement.nativeElement.addEventListener('canplaythrough',()=>{
    //   console.log('This video can play completely now - from canplaythrough');
    // });
    // this.videoElement.nativeElement.addEventListener('durationchange',()=>{
    //   console.log('This video got its duration - from durationchange');
    // });
    // this.videoElement.nativeElement.addEventListener('ended',()=>{
    //   console.log('This video is completed - from ended');
    // });
    // this.videoElement.nativeElement.addEventListener('error',()=>{
    //   console.log('This video has some network error or not playable - from error');
    // });
    // this.videoElement.nativeElement.addEventListener('loadeddata',()=>{
    //   console.log('This video first frame loaded - from loadeddata');
    // });
    this.videoElement.nativeElement.addEventListener('loadedmetadata',(e)=>{
      console.log(e);
      console.log('This video loaded its metadata - from loadedmetadata');
    });
    // this.videoElement.nativeElement.addEventListener('play',()=>{
    //   console.log('This video is playing now - from play');
    // });
    // this.videoElement.nativeElement.addEventListener('pause',()=>{
    //   console.log('This video is paused - from pause');
    // });
    // this.videoElement.nativeElement.addEventListener('playing',()=>{
    //   console.log('This video started playing after clicking play or new data - from playing');
    // });
    // this.videoElement.nativeElement.addEventListener('progress',()=>{
    //   console.log('This video is progressing - from progress');
    // });
    // this.videoElement.nativeElement.addEventListener('ratechange',()=>{
    //   console.log('This video playback rate changed - from ratechange');
    // });
    // this.videoElement.nativeElement.addEventListener('seeking',()=>{
    //   console.log('This video is seeking - from seeking');
    // });
    // this.videoElement.nativeElement.addEventListener('waiting',()=>{
    //   console.log('This video is waiting to get new data - from waiting');
    // });
    // this.videoElement.nativeElement.addEventListener('volumechange',()=>{
    //   console.log('This volume is changed - from volumechange');
    // });
    // this.videoElement.nativeElement.addEventListener('timeupdate',(e)=>{
    //   console.log(e);
    //   console.log('This video current time is changed - from timeupdate');
    // });


  }

}