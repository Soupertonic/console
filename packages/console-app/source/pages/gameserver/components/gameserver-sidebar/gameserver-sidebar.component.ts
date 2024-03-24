import { Component } from '@angular/core'

import { GameserverNavigation } from '../gameserver-navigation'
import { GameserverId } from '../gameserver-id'

@Component({
  standalone: true,
  selector: 'console-gameserver-sidebar',
  templateUrl: 'gameserver-sidebar.component.html',
  styleUrl: 'gameserver-sidebar.component.scss',
  imports: [GameserverId, GameserverNavigation],
})
export class GameserverSidebar {}
