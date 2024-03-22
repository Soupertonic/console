import { Component } from '@angular/core'
import { Meter, MeterLabel, MeterValue } from '@console/ui/components/meter'

@Component({
  standalone: true,
  selector: 'console-gameserver-vitals-board',
  templateUrl: 'gameserver-vitals-board.component.html',
  styleUrl: 'gameserver-vitals-board.component.scss',
  imports: [Meter, MeterLabel, MeterValue],
})
export class GameserverVitalsBoard {}
