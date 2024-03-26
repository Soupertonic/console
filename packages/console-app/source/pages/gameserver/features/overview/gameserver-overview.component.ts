import { Component } from '@angular/core'

import { Icon } from '@console/ui/components/icon'
import { Title } from '@console/ui/components/title'
import { TitleSegment } from '@console/ui/components/title-segment'

import { GameserverOverviewActions } from './components/gameserver-overview-actions'
import { GameserverOverviewBanner } from './components/gameserver-overview-banner'
import { GameserverOverviewVitals } from './components/gameserver-overview-vitals'

@Component({
  standalone: true,
  selector: 'console-gameserver-overview',
  templateUrl: 'gameserver-overview.component.html',
  styleUrl: 'gameserver-overview.component.scss',
  imports: [
    Icon,
    Title,
    TitleSegment,
    GameserverOverviewActions,
    GameserverOverviewBanner,
    GameserverOverviewVitals,
  ],
})
export class GameserverOverview {}
