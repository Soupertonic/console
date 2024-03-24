import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core'
import { Data } from '@console/ui/components/data';
import { DataLabel } from '@console/ui/components/data-label';
import { DataValue } from '@console/ui/components/data-value';

@Component({
  standalone: true,
  selector: 'console-gameserver-uptime',
  templateUrl: 'gameserver-uptime.component.html',
  styleUrl: 'gameserver-uptime.component.scss',
  imports: [Data, DataLabel, DataValue, CurrencyPipe],
})
export class GameserverUptime {}
