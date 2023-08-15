import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './standalone/components/header/header.component';

describe('AppComponent', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [RouterTestingModule, HeaderComponent],
        declarations: [AppComponent]
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'photo-library-app'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app.title).toEqual('photo-library-app');
    });
});
