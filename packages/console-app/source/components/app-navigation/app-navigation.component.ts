import { Component } from '@angular/core'

import { AppNavigationLogo } from '../app-navigation-logo'
import { AppNavigationMenu } from '../app-navigation-menu'
import { AppNavigationAvatar } from '../app-navigation-user'

@Component({
  standalone: true,
  selector: 'console-app-navigation',
  templateUrl: 'app-navigation.component.html',
  styleUrl: 'app-navigation.component.scss',
  imports: [AppNavigationLogo, AppNavigationMenu, AppNavigationAvatar],
})
export class AppNavigation {}
