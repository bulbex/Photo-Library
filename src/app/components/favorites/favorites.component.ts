import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Photo } from 'src/app/interfaces/photo';
import { FavoritesService } from 'src/app/services/favorites-service/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  standalone: true,
  providers: [FavoritesService],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    RouterModule
  ]
})
export class FavoritesComponent implements OnInit{

    public favorites$ = new BehaviorSubject<Photo[]>([])

    public isLoading = true

    constructor(private favoritesService: FavoritesService) {}

    ngOnInit(): void {
        let allFavorites = this.favoritesService.allFavorites
        if (allFavorites.length) {
            this.favorites$.next(allFavorites);
            this.isLoading = false
            return
        }
        this.isLoading = false
    }
}
