import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites-component/favorites.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FavoritesService } from 'src/app/services/favorites-service/favorites.service';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    FavoritesComponent
  ],
  providers: [FavoritesService],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    RouterModule
  ]
})
export class FavoritesModule { }
