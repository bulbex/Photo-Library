import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotosComponent } from './components/photos/photos.component';

const routes: Routes = [
    { path: '', component: PhotosComponent },
    { path: 'favorites', loadComponent: () => import("./components/favorites/favorites.component").then(_ => _.FavoritesComponent)},
    { path: 'photos/:id', loadComponent: () => import("./components/single-photo/single-photo.component").then(_ => _.SinglePhotoComponent)},
    // Page not found
    { path: '**', loadComponent: () => import("./components/page-not-found/page-not-found.component").then(_ => _.PageNotFoundComponent) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
