import { Component } from '@angular/core'

import { Title } from '@console/ui/components/title';
import { TitleSegment } from '@console/ui/components/title-segment';

@Component({
  standalone: true,
  selector: 'console-gameserver-databases',
  templateUrl: 'gameserver-databases.component.html',
  styleUrl: 'gameserver-databases.component.scss',
  imports: [Title, TitleSegment],
})
export class GameserverDatabases {}
