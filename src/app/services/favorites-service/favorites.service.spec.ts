import { TestBed } from '@angular/core/testing';

import { FavoritesService } from './favorites.service';

describe('FavoritesService', () => {
    let service: FavoritesService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [FavoritesService]
        });
        service = TestBed.inject(FavoritesService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('allFavorites() getter should return all favorites photos', () => {
        expect(service.allFavorites).toBeInstanceOf(Array);
    });

    it('should add photo to favorites after addPhoto() call', () => {
        service.addPhoto({id: '0', url: ''});
        expect(service.allFavorites.length).toBeGreaterThan(0);
    });

    it('should return photo after getPhoto() call', () => {
        service.addPhoto({id: '0', url: ''});
        let photo = service.getPhoto('0');
        expect(photo).toBeDefined();
    });

    it('should remove photo after removePhoto() call', () => {
        service.removePhoto('0');
        let photo = service.getPhoto('0');
        expect(photo).toBeUndefined();
    });
});
