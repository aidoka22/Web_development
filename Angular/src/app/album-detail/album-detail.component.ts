import {Component, OnInit} from '@angular/core';
import {Album, Photo} from '../models';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {AlbumsService} from '../albums.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: Album;
  loading: boolean;
  photos: Photo[];
  constructor(private route: ActivatedRoute,
              private location: Location,
              private postsService: AlbumsService) {
            this.photos=[];
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = +params.get('id');
      this.getAlbum(id);
    });
  }

  getAlbum(id: number) {
    this.loading = true;
    this.postsService.getAlbum(id).subscribe((album) => {
      this.album = album;
      this.loading = false;
    });
  }
  updateAlbum(){
    this.postsService.updateAlbum(this.album).subscribe((album) =>{
      console.log(album);
      this.loading=true;
    })
  }
  showPhotos(){
    this.postsService.getAlbumPhotos(this.album.id).subscribe((photos) =>{
       this.photos=photos;
    });
  }
  goBack() {
    this.location.back();
  }

}