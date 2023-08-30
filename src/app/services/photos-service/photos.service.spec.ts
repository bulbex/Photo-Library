import { PhotosService } from './photos.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';

const stubURL = 'https://fastly.picsum.photos/id/522/1000/1000.jpg?hmac=HIuhZhKfYOqKKtRRSKB0W-ZCvERwgBuSr64k-PgQvlk'

describe('PhotosService', () => {
    let service: PhotosService;
    let httpClientSpy: jasmine.SpyObj<HttpClient>

    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])

        service = new PhotosService(httpClientSpy);
    });

    it('#getPhotoURL should return URL string', (done) => {
        httpClientSpy.get.and.returnValue(of({url: stubURL}))

        service.getPhotoURL().subscribe(URL => {
            expect(URL).toBe(stubURL);
            done()
        })
    });

    it('#getPhotoURL should return "No photo url!" string when error occurs', (done) => {
        const errorResponse = new HttpErrorResponse({
            error: 'test 404 error',
            status: 404,
            statusText: 'Not Found'
        });
        
        httpClientSpy.get.and.returnValue(of(errorResponse));

        service.getPhotoURL().subscribe(URL => {
            expect(URL).toBe("No photo url!")
            done()
        })
    });
});
