import { Component } from '@angular/core'
import { Avatar } from '@console/ui/components/avatar'
import { Data } from '@console/ui/components/data'
import { DataLabel } from '@console/ui/components/data-label'
import { DataValue } from '@console/ui/components/data-value'

@Component({
  standalone: true,
  selector: 'console-gameserver-id-board',
  templateUrl: 'gameserver-id-board.component.html',
  styleUrl: 'gameserver-id-board.component.scss',
  imports: [Avatar, Data, DataLabel, DataValue],
})
export class GameserverIdBoard {}
