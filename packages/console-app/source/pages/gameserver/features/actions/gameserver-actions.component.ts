import { Component } from '@angular/core'

import { Title } from '@console/ui/components/title'
import { TitleSegment } from '@console/ui/components/title-segment'

@Component({
  standalone: true,
  selector: 'console-gameserver-actions',
  templateUrl: 'gameserver-actions.component.html',
  styleUrl: 'gameserver-actions.component.scss',
  imports: [Title, TitleSegment],
})
export class GameserverActions {}
