import { Component } from '@angular/core'

import { AppMenu } from './components/menu'
import { AppOutlet } from './components/outlet'

@Component({
  standalone: true,
  selector: 'console-app',
  templateUrl: 'app.component.html',
  styleUrl: 'app.component.css',
  imports: [AppMenu, AppOutlet],
})
export class App {}
