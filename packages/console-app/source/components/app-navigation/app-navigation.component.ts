import { Component } from '@angular/core'

import { AppNavigationLogo } from '../app-navigation-logo';

@Component({
  standalone: true,
  selector: 'console-app-navigation',
  templateUrl: 'app-navigation.component.html',
  styleUrl: 'app-navigation.component.scss',
  imports: [AppNavigationLogo],
})
export class AppNavigation {}
