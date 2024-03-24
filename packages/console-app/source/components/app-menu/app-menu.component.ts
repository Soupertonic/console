import { Component } from '@angular/core'

import { AppMenuLogo } from '../app-menu-logo';

@Component({
  standalone: true,
  selector: 'console-app-menu',
  templateUrl: 'app-menu.component.html',
  styleUrl: 'app-menu.component.scss',
  imports: [AppMenuLogo],
})
export class AppMenu {}
