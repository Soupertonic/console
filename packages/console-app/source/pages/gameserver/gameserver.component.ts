import { Component } from '@angular/core'
import { RouterLink, RouterOutlet } from '@angular/router'

import { GameserverActionsBoard } from './components/actions-board'
import { GameserverIdBoard } from './components/id-board'
import { GameserverMenuBoard } from './components/menu-board'
import { GameserverOutletBoard } from './components/outlet-board'
import { GameserverUptimeBoard } from './components/uptime-board'
import { GameserverVitalsBoard } from './components/vitals-board'

@Component({
  standalone: true,
  selector: 'console-gameserver',
  templateUrl: 'gameserver.component.html',
  styleUrl: 'gameserver.component.css',
  imports: [
    GameserverActionsBoard,
    GameserverIdBoard,
    GameserverMenuBoard,
    GameserverOutletBoard,
    GameserverUptimeBoard,
    GameserverVitalsBoard,
  ],
})
export class Gameserver {}
