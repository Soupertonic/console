import { Component, OnInit, inject, input } from '@angular/core'
import { Meter } from './meter.component'

@Component({
  selector: 'console-meter-label',
  standalone: true,
  imports: [],
  template: ``,
  styles: ``,
})
export class MeterLabel implements OnInit {
  public text = input.required<string>()

  private _meter = inject(Meter)

  public ngOnInit(): void {
    this._assignSelfToMeter()
  }

  private _assignSelfToMeter(): void {
    this._meter.assignLabel(this)
  }
}
