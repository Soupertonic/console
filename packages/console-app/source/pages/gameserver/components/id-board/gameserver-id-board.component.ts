import { Component } from '@angular/core'
import { Avatar, AvatarSkeleton } from '@console/ui/components/avatar'
import { Data, DataLabel, DataValue } from '@console/ui/components/data'

@Component({
  standalone: true,
  selector: 'console-gameserver-id-board',
  templateUrl: 'gameserver-id-board.component.html',
  styleUrl: 'gameserver-id-board.component.scss',
  imports: [Avatar, AvatarSkeleton, Data, DataLabel, DataValue],
})
export class GameserverIdBoard {}
