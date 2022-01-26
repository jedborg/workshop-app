export interface Video {
  id: string;
  title: string;
  author: string;
  viewDetails: VideoDetail[];
}

export interface VideoDetail {
  age: number;
  region: string;
  date: string;
}
