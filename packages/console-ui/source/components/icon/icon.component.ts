import { Component, computed, input } from "@angular/core"

@Component({
  standalone: true,
  selector: 'console-icon',
  templateUrl: 'icon.component.html',
  styleUrl: 'icon.component.scss',
  imports: [],
  host: {
    '[class.small]': 'useSmallSize()',
    '[class.regular]': 'useRegularSize()',
    '[class.big]': 'useBigSize()',
  }
})
export class Icon {
  public identifier = input.required<string>()
  public size = input.required<'small' | 'regular' | 'big'>()

  protected useSmallSize = computed(() => this.size() == 'small')
  protected useRegularSize = computed(() => this.size() == 'regular')
  protected useBigSize = computed(() => this.size() == 'big')
}
