import { Component, input } from '@angular/core'
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
}
