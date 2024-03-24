import { Component } from '@angular/core'

import { GameserverActions } from './components/actions'
import { GameserverId } from './components/id'
import { GameserverNavigation } from './components/navigation'
import { GameserverOutlet } from './components/outlet'
import { GameserverUptime } from './components/uptime'
import { GameserverVitals } from './components/vitals'

@Component({
  standalone: true,
  selector: 'console-gameserver',
  templateUrl: 'gameserver.component.html',
  styleUrl: 'gameserver.component.scss',
  imports: [
    GameserverActions,
    GameserverId,
    GameserverNavigation,
    GameserverOutlet,
    GameserverUptime,
    GameserverVitals,
  ],
})
export class Gameserver {}
