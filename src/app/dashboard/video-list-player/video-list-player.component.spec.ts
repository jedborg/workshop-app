import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoListPlayerComponent } from './video-list-player.component';

describe('VideoListPlayerComponent', () => {
  let component: VideoListPlayerComponent;
  let fixture: ComponentFixture<VideoListPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoListPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoListPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
