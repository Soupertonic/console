import { Component } from '@angular/core'

import { Title } from '@console/ui/components/title';
import { TitleSegment } from '@console/ui/components/title-segment';

@Component({
  standalone: true,
  selector: 'console-gameserver-files',
  templateUrl: 'gameserver-files.component.html',
  styleUrl: 'gameserver-files.component.scss',
  imports: [Title, TitleSegment],
})
export class GameserverFiles {}
