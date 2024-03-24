import { Component } from '@angular/core'

import { Title } from '@console/ui/components/title'
import { TitleSegment } from '@console/ui/components/title-segment'

@Component({
  standalone: true,
  selector: 'console-gameserver-logs',
  templateUrl: 'gameserver-logs.component.html',
  styleUrl: 'gameserver-logs.component.scss',
  imports: [Title, TitleSegment],
})
export class GameserverLogs {}
