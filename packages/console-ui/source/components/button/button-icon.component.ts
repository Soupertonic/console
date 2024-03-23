import { Component, input } from "@angular/core"

@Component({
  standalone: true,
  selector: 'console-button-icon',
  templateUrl: 'button-icon.component.html',
  styleUrl: 'button-icon.component.scss',
  imports: [],
})
export class ButtonIcon {
  public slot = input.required<'start' | 'end'>()
}
