import { Component, OnInit, inject, input } from '@angular/core'
import { Meter } from './meter.component'

@Component({
  standalone: true,
  selector: 'console-meter-value',
  templateUrl: 'meter-value.component.html',
  styleUrl: 'meter-value.component.css',
  imports: [],
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
