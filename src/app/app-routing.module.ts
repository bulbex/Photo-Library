import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosComponent } from './pages/photos/photos-component/photos.component';
import { FavoritesComponent } from './pages/favorites/favorites-component/favorites.component';
import { SinglePhotoComponent } from './pages/single-photo/single-photo-component/single-photo/single-photo.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
    { path: '', component: PhotosComponent },
    { path: 'favorites', component: FavoritesComponent},
    { path: 'photos/:id', component: SinglePhotoComponent},
    // Page not found
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
