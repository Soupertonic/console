import { Component } from '@angular/core'

import { Title } from '@console/ui/components/title'
import { TitleSegment } from '@console/ui/components/title-segment'
import { GameserverOverviewBanner } from './components/gameserver-overview-banner'

@Component({
  standalone: true,
  selector: 'console-gameserver-overview',
  templateUrl: 'gameserver-overview.component.html',
  styleUrl: 'gameserver-overview.component.scss',
  imports: [Title, TitleSegment, GameserverOverviewBanner],
})
export class GameserverOverview {}
