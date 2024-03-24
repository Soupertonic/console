import { Component } from '@angular/core'

import { AppMenu } from './components/app-menu'
import { AppOutlet } from './components/app-outlet'

@Component({
  standalone: true,
  selector: 'console-app',
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.scss',
  imports: [AppMenu, AppOutlet],
})
export class App {}
