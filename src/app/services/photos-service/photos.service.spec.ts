import { TestBed } from '@angular/core/testing';

import { PhotosService } from './photos.service';
import { HttpClientModule } from '@angular/common/http';

describe('PhotosService', () => {
    let service: PhotosService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers:[PhotosService],
            imports: [HttpClientModule]
        });
        service = TestBed.inject(PhotosService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should get URL string or mock string on getPhotoURL() call', (done) => {
        service.getPhotoURL().subscribe(string => {
            expect(string).toBeInstanceOf(String);
            done()
        })
    });
});
