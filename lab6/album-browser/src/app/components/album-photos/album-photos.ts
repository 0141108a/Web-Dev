import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-photos.html',
  styleUrls: ['./album-photos.css']
})
export class AlbumPhotos implements OnInit {
  photos: Photo[] = [];
  albumId: number | null = null;
  loading = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.albumId = +params['id'];
      if (this.albumId) {
        this.loadPhotos(this.albumId);
      }
    });
  }

  loadPhotos(id: number): void {
    this.loading = true;
    this.error = null;
    
    this.albumService.getAlbumPhotos(id).subscribe({
      next: (data) => {
        this.photos = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Не удалось загрузить фотографии';
        this.loading = false;
      }
    });
  }

  goBack(): void {
    if (this.albumId) {
      this.router.navigate(['/albums', this.albumId]);
    }
  }
}