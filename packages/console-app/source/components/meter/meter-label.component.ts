import { Component, OnInit, ViewEncapsulation, inject, input } from '@angular/core'
import { Meter } from './meter.component'

@Component({
  selector: 'console-meter-label',
  templateUrl: './meter-label.component.html',
  styleUrl: './meter-label.component.css',
  encapsulation: ViewEncapsulation.ShadowDom,
  standalone: true,
  imports: [],
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
