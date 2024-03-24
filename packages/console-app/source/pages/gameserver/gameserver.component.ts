import { Component } from '@angular/core'

import { GameserverSidebar } from './components/sidebar'
import { GameserverOutlet } from './components/outlet'

@Component({
  standalone: true,
  selector: 'console-gameserver',
  templateUrl: 'gameserver.component.html',
  styleUrl: 'gameserver.component.scss',
  imports: [
    GameserverSidebar,
    GameserverOutlet,
  ],
})
export class Gameserver {}
