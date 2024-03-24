import { Component, computed, input } from "@angular/core"

@Component({
  standalone: true,
  selector: 'console-button',
  templateUrl: 'button.component.html',
  styleUrl: 'button.component.scss',
  imports: [],
  host: {
    '[class.small]': 'useSmallSize()',
    '[class.regular]': 'useRegularSize()',
    '[class.big]': 'useBigSize()',
    '[class.fluid]': 'useFluidMode()',
    '[class.packed]': 'usePackedMode()',
    '[class.start]': 'useStartAlignment()',
    '[class.center]': 'useCenterAlignment()',
    '[class.end]': 'useEndAlignment()',
    '[class.primary]': 'usePrimaryAction()',
    '[class.secondary]': 'useSecondaryAction()',
    '[class.control]': 'useControlAction()',
    '[class.safe]': 'useSafeAction()',
    '[class.risky]': 'useRiskyAction()',
    '[class.dangerous]': 'useDangerousAction()',
  }
})
export class Button {
  public size = input.required<'small' | 'regular' | 'big'>()
  public mode = input.required<'fluid' | 'packed'>()
  public alignment = input.required<'start' | 'center' | 'end'>()
  public action = input.required<'primary' | 'secondary' | 'control' | 'safe' | 'risky' | 'dangerous'>()

  protected useSmallSize = computed(() => this.size() == 'small')
  protected useRegularSize = computed(() => this.size() == 'regular')
  protected useBigSize = computed(() => this.size() == 'big')

  protected useFluidMode = computed(() => this.mode() == 'fluid')
  protected usePackedMode = computed(() => this.mode() == 'packed')

  protected useStartAlignment = computed(() => this.alignment() == 'start')
  protected useCenterAlignment = computed(() => this.alignment() == 'center')
  protected useEndAlignment = computed(() => this.alignment() == 'end')

  protected usePrimaryAction = computed(() => this.action() == 'primary')
  protected useSecondaryAction = computed(() => this.action() == 'secondary')
  protected useControlAction = computed(() => this.action() == 'control')
  protected useSafeAction = computed(() => this.action() == 'safe')
  protected useRiskyAction = computed(() => this.action() == 'risky')
  protected useDangerousAction = computed(() => this.action() == 'dangerous')
}
