import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos-component/photos.component';
import { PhotosService } from 'src/app/services/photos-service/photos.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { FavoritesService } from 'src/app/services/favorites-service/favorites.service';



@NgModule({
  declarations: [
    PhotosComponent
  ],
  providers: [PhotosService, FavoritesService],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ]
})
export class PhotosModule { }
