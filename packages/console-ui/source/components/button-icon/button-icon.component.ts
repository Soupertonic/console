import { Component, input } from "@angular/core"

import { Icon } from "../icon"

@Component({
  standalone: true,
  selector: 'console-button-icon',
  templateUrl: 'button-icon.component.html',
  styleUrl: 'button-icon.component.scss',
  imports: [Icon],
})
export class ButtonIcon {
  public identifier = input.required<string>()
  public size = input.required<'small' | 'regular' | 'big'>()
  public slot = input.required<'start' | 'end'>()
}
