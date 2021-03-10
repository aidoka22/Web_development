import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Album, Photo} from './models';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {htmlAstToRender3Ast} from '@angular/compiler/src/render3/r3_template_transform';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  BASE_URL = 'https://jsonplaceholder.typicode.com';
  options = new HttpHeaders({
    'Content-Type': 'application/json'
  });


  constructor(private client: HttpClient) {
  }

  getAlbums(): Observable<Album[]> {
    return this.client.get<Album[]>(`${this.BASE_URL}/albums`);
  }

  getAlbum(id: number): Observable<Album> {
    return this.client.get<Album>(`${this.BASE_URL}/albums/${id}`);
  }
  getPhotos(id:number):Observable<Album>  {
    return this.client.get<Album>(`${this.BASE_URL}/albums/${id}/photos`);
  }
  addAlbum(album: Album): Observable<Album> {
    return this.client.post<Album>(`${this.BASE_URL}/albums`, album);//, this.options);
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.client.put<Album>(`${this.BASE_URL}/albums/${album.id}`, album);//, this.options);
  }

  deleteAlbum(id: number): Observable<any> {
    return this.client.delete<any>(`${this.BASE_URL}/albums/${id}`);
  }
  getAlbumPhotos(id:number): Observable< Photo[] >{
    return this.client.get<Photo[]>(`${this.BASE_URL}/albums/${id}/photos`);
  }
}
