import { Component, input } from '@angular/core'
import { MeterLabel } from './meter-label.component'
import { MeterValue } from './meter-value.component'
import { ProgressBar } from '../progress-bar'

@Component({
  standalone: true,
  selector: 'console-meter',
  templateUrl: 'meter.component.html',
  styleUrl: 'meter.component.css',
  imports: [ProgressBar],
})
export class Meter {
  public minimum = input.required<number>()
  public mean = input.required<number>()
  public maximum = input.required<number>()

  protected label: MeterLabel | undefined
  protected value: MeterValue | undefined

  public assignLabel(label: MeterLabel): void {
    this.label = label
  }

  public assignValue(value: MeterValue): void {
    this.value = value
  }
}
