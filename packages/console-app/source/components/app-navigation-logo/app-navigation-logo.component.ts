import { Component } from '@angular/core'

import { Logo } from '@console/ui/components/logo';

@Component({
  standalone: true,
  selector: 'console-app-navigation-logo',
  templateUrl: 'app-navigation-logo.component.html',
  styleUrl: 'app-navigation-logo.component.scss',
  imports: [Logo],
})
export class AppNavigationLogo {}
