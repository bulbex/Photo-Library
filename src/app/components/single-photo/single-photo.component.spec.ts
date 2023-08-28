import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePhotoComponent } from './single-photo.component';
import { FavoritesService } from 'src/app/services/favorites-service/favorites.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('SinglePhotoComponent', () => {
    let component: SinglePhotoComponent;
    let fixture: ComponentFixture<SinglePhotoComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SinglePhotoComponent],
            providers: [FavoritesService],
            imports: [RouterTestingModule]
        });
        fixture = TestBed.createComponent(SinglePhotoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
