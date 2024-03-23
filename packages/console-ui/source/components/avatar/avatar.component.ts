import { Component, computed, input } from '@angular/core'

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
  }
})
export class Avatar {
  public src = input.required<string>()
  public alt = input.required<string>()
  public size = input.required<'small' | 'regular' | 'big'>()

  protected useSmallSize = computed(() => this.size() == 'small')
  protected useRegularSize = computed(() => this.size() == 'regular')
  protected useBigSize = computed(() => this.size() == 'big')
}
