import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { Video } from '../../types';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
})
export class VideoListComponent implements OnInit {
  // explicit
  @Input() videos: Observable<Video[]>;
  @Input() activeVideo: Video | undefined;

  @Output() videoSelected = new EventEmitter<Video>();

  constructor() {
    this.videos = new Observable<Video[]>();
  }

  videoClicked(video: Video) {
    this.videoSelected.emit(video);
  }

  ngOnInit(): void {}
}
