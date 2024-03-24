import { Component } from '@angular/core'

import { Title } from '@console/ui/components/title';
import { TitleSegment } from '@console/ui/components/title-segment';

@Component({
  standalone: true,
  selector: 'console-gameserver-overview',
  templateUrl: 'gameserver-overview.component.html',
  styleUrl: 'gameserver-overview.component.scss',
  imports: [Title, TitleSegment],
})
export class GameserverOverview {}
