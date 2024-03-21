import { Component, ViewEncapsulation, input } from '@angular/core'
import { MeterLabel } from './meter-label.component'
import { MeterValue } from './meter-value.component'
import { ProgressBar } from '../progress-bar'

@Component({
  selector: 'console-meter',
  standalone: true,
  imports: [ProgressBar],
  encapsulation: ViewEncapsulation.ShadowDom,
  template: `
    <div class="meter">
      @if (label) {
        <div class="meter-label">{{ label.text() }}</div>
      }
      <div class="meter-presence">
        @if (value) {
          <div class="meter-value">{{ value.text() }}</div>
        }
        <console-progress-bar
          [minimum]="minimum()"
          [mean]="mean()"
          [maximum]="maximum()"
          [size]="'slim'"
        />
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
    `
      .meter {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
    `,
    `
      .meter-presence {
        display: flex;
        align-items: center;
        gap: 10px;
      }
    `,
    `
      console-progress-bar {
        flex-grow: 1;
      }
    `,
  ],
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
