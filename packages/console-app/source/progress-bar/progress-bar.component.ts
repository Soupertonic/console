import { Component, computed, input } from '@angular/core'

@Component({
  selector: 'console-progress-bar',
  standalone: true,
  imports: [],
  template: `
    <div class="progress-bar">
      <div
        class="progress-bar-segment occupied"
        style="--percentage: {{ percentage() }}%"
        [class.slim]="useSlimSize"
        [class.regular]="useRegularSize"
        [class.static]="useStaticMode"
        [class.indeterminate]="useIndeterminateMode"
      ></div>
      <div
        class="progress-bar-segment remaining"
        [class.slim]="useSlimSize"
        [class.regular]="useRegularSize"
        [class.static]="useStaticMode"
        [class.indeterminate]="useIndeterminateMode"
      ></div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        overflow: hidden;
        border-radius: 10px;
      }
    `,
    `
      .progress-bar {
        flex-grow: 1;
        display: flex;
        align-items: center;
      }
    `,
    `
      .progress-bar-segment.slim {
        height: 3px;
      }
    `,
    `
      .progress-bar-segment.regular {
        height: 10px;
      }
    `,
    `
      .progress-bar-segment.occupied.static,
      .progress-bar-segment.occupied.indeterminate {
        width: var(--percentage);
        background-color: #000000;
        transition: all 750ms cubic-bezier(0.19, 1, 0.22, 1);
      }
    `,
    `
      .progress-bar-segment.remaining.static {
        background-color: #d9d9d9;
        flex-grow: 1;
      }
    `,
    `
      .progress-bar-segment.remaining.indeterminate {
        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAyCAIAAAAm4OfBAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA/ElEQVRIia3SMQ7EIAxE0VlCQ5H7Xyq3iRQaLG0ThWSXgD3G3TRfr/Bn27Z1XUGdiOz7fs2QUuJCAI7juM8QY+RCpRQRueayLIFG5ZzvM6VEtv5RMUay9Y8CwLSaKLLVRDGtNxTTekOZWx2UudVB2Vp9lK3VRxlaQ5ShNURpWxqUtqVBqVpKlKqlRI1betS4pUcNWibUoGVC9VpWVK9lRb22CNRri0C1Wxyq3eJQjRaNarRo1G/Lg/pteVCPlhP1aDlRteVH1ZYfdbamoM7WFBSAMAsFIMxCAQizUKWUx997UDnn2nKiRKS2nChcv+pH1ZYfdbamoM7WFBSALzVG47zsY1MzAAAAAElFTkSuQmCC');
        background-repeat: repeat;
        background-size: 6.5px;
        animation-name: progress-bar-indeterminate;
        animation-duration: 250ms;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        flex-grow: 1;
      }

      @keyframes progress-bar-indeterminate {
        from {
          background-position: 0 0;
        }
        to {
          background-position: 6.5px 0;
        }
      }
    `,
  ],
})
export class ProgressBar {
  public minimum = input.required<number>()
  public mean = input.required<number>()
  public maximum = input.required<number>()
  public size = input<'slim' | 'regular'>('regular')
  public mode = input<'static' | 'indeterminate'>('static')

  protected percentage = computed(
    () => ((this.mean() - this.minimum()) * 100) / (this.maximum() - this.minimum())
  )

  protected get useSlimSize(): boolean {
    return this.size() == 'slim'
  }

  protected get useRegularSize(): boolean {
    return this.size() == 'regular'
  }

  protected get useStaticMode(): boolean {
    return this.mode() == 'static'
  }

  protected get useIndeterminateMode(): boolean {
    return this.mode() == 'indeterminate'
  }
}
