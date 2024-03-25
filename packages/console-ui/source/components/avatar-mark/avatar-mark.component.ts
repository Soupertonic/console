import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'console-avatar-mark',
  templateUrl: 'avatar-mark.component.html',
  styleUrl: 'avatar-mark.component.scss',
  imports: [],
})
export class AvatarMark {
  public color = input.required<
    | 'red'
    | 'green'
    | 'orange'
    | 'blue'
    | 'yellow'
    | 'cyan'
    | 'navy'
    | 'purple'
    | 'pink'
  >()
}
