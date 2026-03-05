import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AlbumService } from '../../services/album.service'; 
import { Album } from '../../models/album.model'; 

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './albums.html',
  styleUrls: ['./albums.css']
})
export class Albums implements OnInit {
  albums: Album[] = [];
  filteredAlbums: Album[] = [];
  loading = true;
  error: string | null = null;

  constructor(
    private albumService: AlbumService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data;
        this.filteredAlbums = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Не удалось загрузить альбомы';
        this.loading = false;
      }
    });
  }

  filterAlbums(event: any): void {
    const term = event.target.value.toLowerCase();
    this.filteredAlbums = this.albums.filter(a => 
      a.title.toLowerCase().includes(term) || a.id.toString().includes(term)
    );
  }

  deleteAlbum(id: number, event: Event): void {
    event.stopPropagation();
    if (confirm('Удалить альбом?')) {
      this.albumService.deleteAlbum(id).subscribe({
        next: () => {
          this.albums = this.albums.filter(a => a.id !== id);
          this.filteredAlbums = this.filteredAlbums.filter(a => a.id !== id);
        }
      });
    }
  }

  viewAlbum(id: number): void {
    this.router.navigate(['/albums', id]);
  }
}