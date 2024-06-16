import { Routes } from '@angular/router';
import { LinkVidInputComponent } from './link-vid-input/link-vid-input.component';

export const routes: Routes = [
    { path: '', component: LinkVidInputComponent },
    { path: 'input', component: LinkVidInputComponent }
];
