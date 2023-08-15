import { Injectable } from '@angular/core';
import { Photo } from 'src/app/interfaces/photo';

@Injectable()
export class FavoritesService {

    constructor() { }

    addPhoto(photo: Photo) {
        this.allFavorites.findIndex(favorite => favorite.id === photo.id) === -1
        ? localStorage.setItem('favorites', JSON.stringify([...this.allFavorites, {...photo}]))
        : null
    }

    getPhoto(photoId: string) {
        return this.allFavorites.find(photo => photo.id === photoId)
    }

    removePhoto(photoId: string) {
        let photoIndex = this.allFavorites.findIndex(photo => photo.id === photoId)
        if (photoIndex !== -1) {
            let properArray = this.allFavorites
            properArray.splice(photoIndex, 1)
            localStorage.setItem('favorites', JSON.stringify(properArray))
        }
    }

    get allFavorites(): Photo[] {
        let allFavorites = localStorage.getItem('favorites')
        if (allFavorites !== null) {
            return [...JSON.parse(allFavorites)]
        }
        return []
    }
}
