import { Component, computed, input } from '@angular/core'
import { MeterLabel } from './meter-label.component'
import { MeterValue } from './meter-value.component'

@Component({
  selector: 'console-meter',
  standalone: true,
  imports: [],
  template: `
    <div class="meter">
      @if (label) {
        <div class="meter-label">{{ label.text() }}</div>
      }
      <div class="meter-presence">
        @if (value) {
          <div class="meter-value">{{ value.text() }}</div>
        }
        <div class="meter-bar">
          <div class="meter-bar-segment occupied" style="--percentage: {{ percentage() }}%"></div>
          <div class="meter-bar-head"></div>
          <div class="meter-bar-segment remaining"></div>
        </div>
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
        gap: 10px;
      }
    `,
    `
      .meter-bar {
        flex-grow: 1;
        display: flex;
        align-items: center;
      }
    `,
    `
      .meter-bar-head {
        height: 10px;
        width: 3px;
        background-color: #969696;
        border-radius: 10px;
      }
    `,
    `
      .meter-bar-segment {
        height: 3px;
      }
    `,
    `
      .meter-bar-segment.occupied {
        width: var(--percentage);
        background-color: #000000;
        border-radius: 10px 0px 0px 10px;
        transition: all 750ms cubic-bezier(0.19, 1, 0.22, 1);
      }
    `,
    `
      .meter-bar-segment.remaining {
        background-color: #d9d9d9;
        border-radius: 0px 10px 10px 0px;
        flex-grow: 1;
      }
    `,
  ],
})
export class Meter {
  public minimum = input.required<number>()
  public mean = input.required<number>()
  public maximum = input.required<number>()

  protected percentage = computed(() => ((this.mean() - this.minimum()) * 100) / (this.maximum() - this.minimum()))

  protected label: MeterLabel | undefined
  protected value: MeterValue | undefined

  public assignLabel(label: MeterLabel): void {
    this.label = label
  }

  public assignValue(value: MeterValue): void {
    this.value = value
  }
}
