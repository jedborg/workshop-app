import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoDashboardComponent } from './video-dashboard/video-dashboard.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoListPlayerComponent } from './video-list-player/video-list-player.component';
import { StatFiltersComponent } from './stat-filters/stat-filters.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { VideoThubnailComponent } from './video-thubnail/video-thubnail.component';

@NgModule({
  declarations: [
    VideoDashboardComponent,
    VideoListComponent,
    VideoListPlayerComponent,
    StatFiltersComponent,
    VideoThubnailComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
