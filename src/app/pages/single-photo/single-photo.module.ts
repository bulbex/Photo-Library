import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglePhotoComponent } from './single-photo-component/single-photo/single-photo.component';
import { FavoritesService } from 'src/app/services/favorites-service/favorites.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SinglePhotoComponent],
  providers: [FavoritesService],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule
  ]
})
export class SinglePhotoModule { }
