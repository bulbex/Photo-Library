import { TestBed } from '@angular/core/testing';

import { FavoritesService } from './favorites.service';

const stubValue = [
    {"id":"106","url":"https://fastly.picsum.photos/id/106/1000/1000.jpg?hmac=iWNYUAKllk_GfeYH2QJNaFV7rimXMzblGILOLol7jPQ"},
    // {"id":"774","url":"https://fastly.picsum.photos/id/774/1000/1000.jpg?hmac=2Oel4JP0tBJMSD3My_wC5721MlGwu-1F9A_Pg-PusH8"},
    // {"id":"685","url":"https://fastly.picsum.photos/id/685/1000/1000.jpg?hmac=z-fi-ODAiUAMNVP7J9h-El8w_nOXIfdUvqgteRO2ch4"},
    // {"id":"9","url":"https://fastly.picsum.photos/id/9/1000/1000.jpg?hmac=sw4FzjtFEt8O7j2KhDBojBQwSIgJdLwAxPlwofBAOSA"},
    // {"id":"477","url":"https://fastly.picsum.photos/id/477/1000/1000.jpg?hmac=y2Qqhq8lLe7PrjRPIxa3UvcKHX_Q4TV-eaTBqhcBCUE"}
]

describe('FavoritesService', () => {
    let service: FavoritesService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [FavoritesService]
        });
        service = TestBed.inject(FavoritesService);
        
        service.addPhoto(stubValue[0])
    });

    it('#allFavorites should return all favorites photos', () => {
        expect(service.allFavorites).toEqual(stubValue);
    });

    it('#getPhoto should return photo', () => {
        expect(service.getPhoto('106'))
        .withContext('FavoriteService getPhoto() method returned stub value')
        .toEqual(stubValue[0]);
    });

    it('#removePhoto should remove photo', () => {
        service.removePhoto('106');
        expect(service.allFavorites).toEqual([]);
    });
});
