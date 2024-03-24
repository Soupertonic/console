import { Component } from '@angular/core'

import { Title } from '@console/ui/components/title'
import { TitleSegment } from '@console/ui/components/title-segment'

@Component({
  standalone: true,
  selector: 'console-gameserver-backups',
  templateUrl: 'gameserver-backups.component.html',
  styleUrl: 'gameserver-backups.component.scss',
  imports: [Title, TitleSegment],
})
export class GameserverBackups {}
