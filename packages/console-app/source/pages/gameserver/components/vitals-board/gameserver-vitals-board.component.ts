import { Component } from '@angular/core'
import { Meter } from '@console/ui/components/meter'
import { MeterLabel } from '@console/ui/components/meter-label'
import { MeterValue } from '@console/ui/components/meter-value'

@Component({
  standalone: true,
  selector: 'console-gameserver-vitals-board',
  templateUrl: 'gameserver-vitals-board.component.html',
  styleUrl: 'gameserver-vitals-board.component.scss',
  imports: [Meter, MeterLabel, MeterValue],
})
export class GameserverVitalsBoard {}
