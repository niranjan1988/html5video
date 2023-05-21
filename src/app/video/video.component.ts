import { Component, ElementRef, isStandalone, OnInit, ViewChild } from '@angular/core';

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
    this.videoElement.nativeElement.addEventListener('canplay',()=>{
      console.log('This video is playable - from canPlay');
    })
    this.videoElement.nativeElement.addEventListener('canplaythrough',()=>{
      console.log('This video can play completely now - from canplaythrough');
    })
    this.videoElement.nativeElement.addEventListener('durationchange',()=>{
      console.log('This video got its duration - from durationchange');
    })
    this.videoElement.nativeElement.addEventListener('ended',()=>{
      console.log('This video is completed - from ended');
    })
    this.videoElement.nativeElement.addEventListener('error',()=>{
      console.log('This video has some network error or not playable - from error');
    })
    this.videoElement.nativeElement.addEventListener('loadeddata',()=>{
      console.log('This video first frame loaded - from loadeddata');
    })
    this.videoElement.nativeElement.addEventListener('loadedmetadata',()=>{
      console.log('This video loaded its metadata - from loadedmetadata');
    })
    // this.videoElement.nativeElement.addEventListener('canplaythrough',()=>{
    //   console.log('This video is playable - from canplaythrough');
    // })

  }

}