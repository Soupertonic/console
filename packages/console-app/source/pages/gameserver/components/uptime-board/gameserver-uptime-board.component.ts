import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core'
import { Data, DataLabel, DataValue } from '@console/ui/components/data';

@Component({
  standalone: true,
  selector: 'console-gameserver-uptime-board',
  templateUrl: 'gameserver-uptime-board.component.html',
  styleUrl: 'gameserver-uptime-board.component.scss',
  imports: [Data, DataLabel, DataValue, CurrencyPipe],
})
export class GameserverUptimeBoard {}
