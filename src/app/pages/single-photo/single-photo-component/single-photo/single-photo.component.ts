import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Photo } from 'src/app/interfaces/photo';
import { FavoritesService } from 'src/app/services/favorites-service/favorites.service';

@Component({
  selector: 'app-single-photo',
  templateUrl: './single-photo.component.html',
  styleUrls: ['./single-photo.component.scss']
})
export class SinglePhotoComponent implements OnInit{

    public photo$!: Observable<Photo>;

    public isError = false

    constructor(private favoritesService: FavoritesService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        let photo = this.favoritesService.getPhoto(this.route.snapshot.params['id'])
        if (photo !== undefined) {
            this.photo$ = of(photo)
            return
        }
        this.isError = true
    }

    removeFromFavorite(photoId: string) {
        this.favoritesService.removePhoto(photoId)
    }
}
