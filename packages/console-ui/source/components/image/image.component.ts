import { Component, computed, input, output, signal } from '@angular/core'

@Component({
  standalone: true,
  selector: 'console-image',
  templateUrl: 'image.component.html',
  styleUrl: 'image.component.scss',
  imports: [],
  host: {
    '[class.skeleton]': 'loading()',
  }
})
export class Image {
  public src = input.required<string>()
  public alt = input.required<string>()
  public strategy = input.required<'eager' | 'lazy'>()

  public load = output()
  public error = output()

  private loading = signal(true)

  protected loaded(): void {
   this.loading.set(false)
   this.load.emit()
  }

  protected errored(): void {
    this.loading.set(false)
    this.error.emit()
  }
}
