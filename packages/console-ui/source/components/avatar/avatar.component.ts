import { Component, computed, input, signal } from '@angular/core'

@Component({
  standalone: true,
  selector: 'console-avatar',
  templateUrl: 'avatar.component.html',
  styleUrl: 'avatar.component.scss',
  imports: [],
  host: {
    '[class.small]': 'useSmallSize()',
    '[class.regular]': 'useRegularSize()',
    '[class.big]': 'useBigSize()',
    '[class.skeleton]': 'loading()',
  }
})
export class Avatar {
  public src = input.required<string>()
  public alt = input.required<string>()
  public size = input.required<'small' | 'regular' | 'big'>()

  protected useSmallSize = computed(() => this.size() == 'small')
  protected useRegularSize = computed(() => this.size() == 'regular')
  protected useBigSize = computed(() => this.size() == 'big')

  protected loading = signal(true)

  protected loaded(): void {
   this.loading.set(false)
  }
}
