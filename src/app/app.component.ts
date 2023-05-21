import { Component } from '@angular/core';
import { VideoComponent } from './video/video.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [VideoComponent]
})
export class AppComponent {
  title = 'html5video';
}
