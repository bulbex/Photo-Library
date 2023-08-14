import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, catchError, finalize, interval, mergeMap,  take, tap, EMPTY, delay, fromEvent, takeUntil, Subject } from 'rxjs';
import { Photo } from 'src/app/interfaces/photo';
import { FavoritesService } from 'src/app/services/favorites-service/favorites.service';
import { PhotosService } from 'src/app/services/photos-service/photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

    public photos$ = new BehaviorSubject<Photo[]>([])

    public showLoadingIndicator = true;
    public isError = false;

    constructor(private photoService: PhotosService, private favoritesService: FavoritesService) {}

    ngOnInit(): void {
        this.getPhotos()

        this.handleScrolling()
    }

    getPhotos() {
        let photosToShow: Photo[] = [];

        interval(0).pipe(
            take(12),
            mergeMap(_ => this.photoService.getPhotoURL().pipe(
                    tap(photoURL => {
                        let photoId = photoURL.split('/')[4]

                        !this.photos$.value.some(photo => photo.id === photoId) 
                            ? photosToShow.push({id: photoId , url: photoURL})
                            : null
                    }
                    )
                )
            ),
            finalize(() => {
                this.photos$.next([...this.photos$.value, ...photosToShow])
            }),
            catchError((err) => {
                this.isError = true
                return EMPTY
            })
        ).subscribe()
    }

    handleScrolling() {
        let scrollTimeout: ReturnType<typeof setTimeout>

        window.addEventListener('scroll', () => {
            let windowEnd = document.body.scrollHeight - 100
            let windowPos = window.innerHeight + window.scrollY
    
            if (windowPos >= windowEnd) {
                clearTimeout(scrollTimeout)

                // Check if user loaded all possible photos, 
                // got length here: https://picsum.photos/list
                if (this.photos$.value.length < 1085) {
                    scrollTimeout = setTimeout(() => this.getPhotos(), 400)
                    return
                }
                this.showLoadingIndicator = false
            }
        })
    }

    addToFavorites(photo: Photo) {
        this.favoritesService.addPhoto(photo)
    }
}
