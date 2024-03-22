import { Component } from '@angular/core'
import { RouterLink, RouterOutlet } from '@angular/router'

import { GameserverIdBoard } from './components/id-board'
import { GameserverUptimeBoard } from './components/uptime-board'
import { GameserverVitalsBoard } from './components/vitals-board'

@Component({
  standalone: true,
  selector: 'console-gameserver',
  templateUrl: 'gameserver.component.html',
  styleUrl: 'gameserver.component.css',
  imports: [
    RouterOutlet,
    RouterLink,
    GameserverIdBoard,
    GameserverUptimeBoard,
    GameserverVitalsBoard,
  ],
})
export class Gameserver {}
