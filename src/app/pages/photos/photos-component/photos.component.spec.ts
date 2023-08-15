import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosComponent } from './photos.component';
import { PhotosService } from 'src/app/services/photos-service/photos.service';
import { HttpClientModule } from '@angular/common/http';
import { FavoritesService } from 'src/app/services/favorites-service/favorites.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

describe('PhotosComponent', () => {
    let component: PhotosComponent;
    let fixture: ComponentFixture<PhotosComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [PhotosComponent],
            providers: [PhotosService, FavoritesService],
            imports: [HttpClientModule, RouterTestingModule, MatProgressSpinnerModule]
        });
        fixture = TestBed.createComponent(PhotosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
