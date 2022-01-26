import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, filter } from 'rxjs';
import { Video } from 'src/app/types';

const apiUrl = 'https://api.angularbootcamp.com';

@Injectable({
  // This service should be created
  // by the root application injector.
  // sdfsdf
  providedIn: 'root',
})
export class VideoLoaderService {
  constructor(private http: HttpClient) {}

  loadEmployees(): Observable<Video[]> {
    return this.http.get<Video[]>(apiUrl + '/videos').pipe(); //.pipe(filter(vid => vid..title === "React"));
  }
}
