import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './album-detail.html',
  styleUrls: ['./album-detail.css']
})
export class AlbumDetail implements OnInit {
  album: Album | null = null;
  loading = true;
  error: string | null = null;
  editedTitle = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      if (id) {
        this.loadAlbum(id);
      }
    });
  }

  loadAlbum(id: number): void {
    this.loading = true;
    this.error = null;
    
    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
        this.editedTitle = data.title;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Не удалось загрузить альбом';
        this.loading = false;
      }
    });
  }

  saveChanges(): void {
    if (!this.album) return;
    
    const updatedAlbum: Album = {
      ...this.album,
      title: this.editedTitle
    };
    
    this.albumService.updateAlbum(updatedAlbum).subscribe({
      next: (data) => {
        this.album = data;
        this.editedTitle = data.title;
        alert('✅ Альбом обновлен!');
      },
      error: (err) => {
        alert('❌ Ошибка при обновлении');
      }
    });
  }

  deleteAlbum(): void {
    if (!this.album) return;
    
    if (confirm('Вы уверены, что хотите удалить этот альбом?')) {
      this.albumService.deleteAlbum(this.album.id).subscribe({
        next: () => {
          alert('✅ Альбом удален');
          this.router.navigate(['/albums']);
        },
        error: (err) => {
          alert('❌ Ошибка при удалении');
        }
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}