import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { VideoLoaderService } from 'src/app/services/video-loader-service';
import { Video } from 'src/app/types';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css'],
})
export class VideoDashboardComponent implements OnInit {
  videoList: Observable<Video[]>; //Video[] = [];
  selectedVideo: Video | undefined;
  //

  constructor(service: VideoLoaderService) {
    //service.loadEmployees().subscribe((videos) => (this.videoList = videos));
    this.videoList = service.loadEmployees();
  }

  ngOnInit(): void {}

  setSelectedVideo(video: Video) {
    this.selectedVideo = video;
  }

  // ngOnDestroy(): void {
  //     //this.
  // }
}
