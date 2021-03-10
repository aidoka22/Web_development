import {Component, OnInit} from '@angular/core';
import {Album} from '../models';
import {AlbumsService} from '../albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[];
  loading: boolean;
  newAlbum:string;
  constructor(private albumsService: AlbumsService) {
    this.newAlbum='';
  }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums() {
    this.loading = true;
    this.albumsService.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loading = false;
    });
  }
  addAlbum(){
    const album={
      title:this.newAlbum
    };
    this.loading=false;
    this.albumsService.addAlbum(album as Album).subscribe((album) =>{
      console.log(album);
      this.albums.push(album);
      //this.newAlbum='';
      //this.loading=true;
    });
  }
  deleteAlbum(id: number) {
    this.albums = this.albums.filter((x) => x.id !== id);
    this.albumsService.deleteAlbum(id).subscribe();
  }

}
