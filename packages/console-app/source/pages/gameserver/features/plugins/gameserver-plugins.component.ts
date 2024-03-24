import { Component } from '@angular/core'

import { Title } from '@console/ui/components/title'
import { TitleSegment } from '@console/ui/components/title-segment'

@Component({
  standalone: true,
  selector: 'console-gameserver-plugins',
  templateUrl: 'gameserver-plugins.component.html',
  styleUrl: 'gameserver-plugins.component.scss',
  imports: [Title, TitleSegment],
})
export class GameserverPlugins {}
