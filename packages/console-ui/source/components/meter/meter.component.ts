import { Component, input } from '@angular/core'

import { MeterData } from './meter-data.component'
import { ProgressBar } from '../progress-bar'

@Component({
  standalone: true,
  selector: 'console-meter',
  templateUrl: 'meter.component.html',
  styleUrl: 'meter.component.scss',
  imports: [MeterData, ProgressBar],
})
export class Meter {
  public minimum = input.required<number>()
  public mean = input.required<number>()
  public maximum = input.required<number>()
}
