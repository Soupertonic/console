import { Component } from '@angular/core'

import { Title } from '@console/ui/components/title';
import { TitleSegment } from '@console/ui/components/title-segment';

@Component({
  standalone: true,
  selector: 'console-gameserver-statistics',
  templateUrl: 'gameserver-statistics.component.html',
  styleUrl: 'gameserver-statistics.component.scss',
  imports: [Title, TitleSegment],
})
export class GameserverStatistics {}
