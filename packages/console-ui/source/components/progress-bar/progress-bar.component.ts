import { Component, computed, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'console-progress-bar',
  templateUrl: 'progress-bar.component.html',
  styleUrl: 'progress-bar.component.scss',
  imports: [],
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
