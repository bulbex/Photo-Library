import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable()
export class PhotosService {

    constructor(private http: HttpClient) { }

    getPhotoURL(): Observable<string> {
        return this.http.get('https://picsum.photos/1000', {observe: 'response', responseType: 'text'})
        .pipe(
            map(res => res.url || 'No photo url!')
        )
    }
}
