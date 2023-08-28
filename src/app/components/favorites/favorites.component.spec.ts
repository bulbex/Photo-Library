import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesComponent } from './favorites.component';
import { FavoritesService } from 'src/app/services/favorites-service/favorites.service';
import { FavoritesModule } from '../favorites.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('FavoritesComponent', () => {
    let component: FavoritesComponent;
    let fixture: ComponentFixture<FavoritesComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [FavoritesComponent],
            providers: [FavoritesService],
            imports: [FavoritesModule, RouterTestingModule]
        });
        fixture = TestBed.createComponent(FavoritesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
