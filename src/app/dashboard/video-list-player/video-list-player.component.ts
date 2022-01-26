import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../../types';

@Component({
  selector: 'app-video-list-player',
  templateUrl: './video-list-player.component.html',
  styleUrls: ['./video-list-player.component.css'],
})
export class VideoListPlayerComponent implements OnInit {
  constructor() {}

  @Input() video: Video | undefined;

  ngOnInit(): void {}
}
