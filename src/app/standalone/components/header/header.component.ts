import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, RouterModule]
})
export class HeaderComponent {
    constructor(private router: Router) {}

    get currentViewIsPhotos() {
        return this.router.url === '/'
    }

    get currentViewIsFavorites() {
        return this.router.url === '/favorites'
    }
}
