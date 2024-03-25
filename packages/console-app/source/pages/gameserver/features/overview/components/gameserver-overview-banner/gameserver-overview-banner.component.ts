import { Component } from '@angular/core'

import { Image } from '@console/ui/components/image';

@Component({
  standalone: true,
  selector: 'console-gameserver-overview-banner',
  templateUrl: 'gameserver-overview-banner.component.html',
  styleUrl: 'gameserver-overview-banner.component.scss',
  imports: [Image],
})
export class GameserverOverviewBanner {}
