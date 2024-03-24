import { Component, inject } from '@angular/core'

import { Avatar } from '@console/ui/components/avatar'
import { AvatarMark } from '@console/ui/components/avatar-mark'
import { Button } from '@console/ui/components/button'
import { ButtonIcon } from '@console/ui/components/button-icon'
import { Theme } from '@console/app/services'

@Component({
  standalone: true,
  selector: 'console-app-navigation-user',
  templateUrl: 'app-navigation-user.component.html',
  styleUrl: 'app-navigation-user.component.scss',
  imports: [Avatar, AvatarMark, Button, ButtonIcon],
  providers: [Theme],
})
export class AppNavigationAvatar {
  protected theme = inject(Theme)
}
