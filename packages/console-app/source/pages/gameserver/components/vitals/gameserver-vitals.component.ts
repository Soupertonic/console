import { Component } from '@angular/core'
import { Meter } from '@console/ui/components/meter'
import { MeterLabel } from '@console/ui/components/meter-label'
import { MeterValue } from '@console/ui/components/meter-value'

@Component({
  standalone: true,
  selector: 'console-gameserver-vitals',
  templateUrl: 'gameserver-vitals.component.html',
  styleUrl: 'gameserver-vitals.component.scss',
  imports: [Meter, MeterLabel, MeterValue],
})
export class GameserverVitals {}
