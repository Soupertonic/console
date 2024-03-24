import { Component } from '@angular/core'

import { Logo } from '@console/ui/components/logo';

@Component({
  standalone: true,
  selector: 'console-app-menu-logo',
  templateUrl: 'app-menu-logo.component.html',
  styleUrl: 'app-menu-logo.component.scss',
  imports: [Logo],
})
export class AppMenuLogo {}
