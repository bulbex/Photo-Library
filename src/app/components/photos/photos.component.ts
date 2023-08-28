import { state, style, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BehaviorSubject, catchError, finalize, interval, take, tap, EMPTY, concatMap } from 'rxjs';
import { Photo } from 'src/app/interfaces/photo';
import { FavoritesService } from 'src/app/services/favorites-service/favorites.service';
import { PhotosService } from 'src/app/services/photos-service/photos.service';

// Got length here: https://picsum.photos/list
const MAX_PHOTOS_AMOUNT = 1085

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
  standalone: true,
  providers: [PhotosService, FavoritesService],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule
    ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('openPhoto', [
        state('open', style({
            width: '40vw',
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            margin: '0 auto',
            'z-index': 100
        })),
        state('closed', style({
            width: '300px'
        }))
    ])
  ]
})
export class PhotosComponent implements OnInit {

    public photos$ = new BehaviorSubject<Photo[]>([])

    public openPhotoId: string = ""

    public showLoadingIndicator = true
    public isError = false

    constructor(private photoService: PhotosService, private favoritesService: FavoritesService) {}

    ngOnInit(): void {
        this.getPhotos()

        this.handleScrolling()
    }

    getPhotos() {
        let photosToShow: Photo[] = [];

        interval(0).pipe(
            take(12),
            concatMap(_ => this.photoService.getPhotoURL().pipe(
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

                // Check if user loaded all possible photos
                if (this.photos$.value.length < MAX_PHOTOS_AMOUNT) {
                    scrollTimeout = setTimeout(() => this.getPhotos(), 400)
                    return
                }
                this.showLoadingIndicator = false
            }
        })
    }

    togglePhotoInFavorites(photo: Photo) {
        this.photoIsInFavorites(photo.id) 
        ? this.favoritesService.removePhoto(photo.id)
        : this.favoritesService.addPhoto(photo)
    }

    photoIsInFavorites(photoId: string): boolean {
        return !!this.favoritesService.getPhoto(photoId)
    }

    togglePhoto(photoId: string) {
        if (this.openPhotoId === photoId) {
            this.openPhotoId = ""
            document.body.style.overflow = 'auto'
            return
        }
        this.openPhotoId = photoId
        document.body.style.overflow = 'hidden'
    }
}
