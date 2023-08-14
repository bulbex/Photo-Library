import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './standalone/components/header/header.component';
import { PhotosModule } from './pages/photos/photos.module';
import { HttpClientModule } from '@angular/common/http';
import { FavoritesModule } from './pages/favorites/favorites.module';
import { SinglePhotoModule } from './pages/single-photo/single-photo.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HeaderComponent,
    PhotosModule,
    FavoritesModule,
    SinglePhotoModule,
    PageNotFoundComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
