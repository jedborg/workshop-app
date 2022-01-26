import { Component, OnInit, Input } from '@angular/core';
import { Video } from 'src/app/types';
import { videoData } from '../video-dashboard/videoManagerData';

@Component({
  selector: 'app-video-thubnail',
  templateUrl: './video-thubnail.component.html',
  styleUrls: ['./video-thubnail.component.css'],
})
export class VideoThubnailComponent implements OnInit {
  constructor() {}

  @Input() video: Video | undefined;

  ngOnInit(): void {}
}
