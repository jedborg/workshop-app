import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoThubnailComponent } from './video-thubnail.component';

describe('VideoThubnailComponent', () => {
  let component: VideoThubnailComponent;
  let fixture: ComponentFixture<VideoThubnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoThubnailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoThubnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
