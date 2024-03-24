import { Component } from '@angular/core'

import { Title } from '@console/ui/components/title'
import { TitleSegment } from '@console/ui/components/title-segment'

@Component({
  standalone: true,
  selector: 'console-gameserver-players',
  templateUrl: 'gameserver-players.component.html',
  styleUrl: 'gameserver-players.component.scss',
  imports: [Title, TitleSegment],
})
export class GameserverPlayers {}
