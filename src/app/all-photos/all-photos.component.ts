import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all-photos',
  templateUrl: './all-photos.component.html',
  styleUrls: ['./all-photos.component.css'],
})
export class AllPhotosComponent implements OnInit {
  constructor(private http: HttpClient) {}

  images?: any[] = [];

  ngOnInit(): void {
    const promise = this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/albums/1/photos')
      .toPromise();
    promise
      .then((data) => {
        this.images = data;
        console.log(this.images);
        console.log('Promise resolved with: ' + JSON.stringify(data));
      })
      .catch((error) => {
        console.log('Promise rejected with ' + JSON.stringify(error));
      });
  }
}
