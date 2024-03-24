import { Component, computed, input, signal } from '@angular/core'

@Component({
  standalone: true,
  selector: 'console-logo',
  templateUrl: 'logo.component.html',
  styleUrl: 'logo.component.scss',
  imports: [],
  host: {
    '[class.small]': 'useSmallSize()',
    '[class.regular]': 'useRegularSize()',
    '[class.big]': 'useBigSize()',
  }
})
export class Logo {
  public size = input.required<'small' | 'regular' | 'big'>()

  protected useSmallSize = computed(() => this.size() == 'small')
  protected useRegularSize = computed(() => this.size() == 'regular')
  protected useBigSize = computed(() => this.size() == 'big')

  protected loading = signal(true)

  protected loaded(): void {
   this.loading.set(false)
  }
}
