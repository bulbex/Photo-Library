import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosComponent } from './photos.component';

describe('PhotosComponent', () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<PhotosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotosComponent]
    });
    fixture = TestBed.createComponent(PhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have photos after getPhotos() call', (done) => {
    component.photos$.subscribe((state) => {
        expect(state).toBeGreaterThanOrEqual(12);
        done();
    })
    expect(component.getPhotos).toHaveBeenCalled()
  });
});
