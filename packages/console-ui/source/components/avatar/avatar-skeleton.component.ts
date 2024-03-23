import { Component, computed, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'console-avatar-skeleton',
  templateUrl: 'avatar-skeleton.component.html',
  styleUrl: 'avatar-skeleton.component.scss',
  imports: [],
  host: {
    '[class.small]': 'useSmallSize()',
    '[class.regular]': 'useRegularSize()',
    '[class.big]': 'useBigSize()',
  }
})
export class AvatarSkeleton {
  public size = input.required<'small' | 'regular' | 'big'>()

  protected useSmallSize = computed(() => this.size() == 'small')
  protected useRegularSize = computed(() => this.size() == 'regular')
  protected useBigSize = computed(() => this.size() == 'big')
}
