import { Component } from '@angular/core'

import { Title } from '@console/ui/components/title'
import { TitleSegment } from '@console/ui/components/title-segment'

@Component({
  standalone: true,
  selector: 'console-gameserver-terminal',
  templateUrl: 'gameserver-terminal.component.html',
  styleUrl: 'gameserver-terminal.component.scss',
  imports: [Title, TitleSegment],
})
export class GameserverTerminal {}
