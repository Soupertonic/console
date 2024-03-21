import { Component, OnInit, inject, input } from '@angular/core'
import { Meter } from './meter.component'

@Component({
  selector: 'console-meter-value',
  standalone: true,
  imports: [],
  template: ``,
  styles: ``,
})
export class MeterValue implements OnInit {
  public text = input.required<string>()

  private _meter = inject(Meter)

  public ngOnInit(): void {
    this._assignSelfToMeter()
  }

  private _assignSelfToMeter(): void {
    this._meter.assignValue(this)
  }
}
