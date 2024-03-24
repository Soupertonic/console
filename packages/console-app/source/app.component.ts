import { Component } from '@angular/core'

import { AppOutlet } from './components/app-outlet'
import { AppNavigation } from './components/app-navigation'

@Component({
  standalone: true,
  selector: 'console-app',
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.scss',
  imports: [AppNavigation, AppOutlet],
})
export class App {}
