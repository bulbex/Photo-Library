import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePhotoComponent } from './single-photo.component';

describe('SinglePhotoComponent', () => {
  let component: SinglePhotoComponent;
  let fixture: ComponentFixture<SinglePhotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SinglePhotoComponent]
    });
    fixture = TestBed.createComponent(SinglePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
