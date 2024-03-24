import { Component } from '@angular/core'

import { Avatar } from '@console/ui/components/avatar'
import { AvatarMark } from '@console/ui/components/avatar-mark'
import { Button } from '@console/ui/components/button'
import { ButtonIcon } from '@console/ui/components/button-icon'

@Component({
  standalone: true,
  selector: 'console-app-navigation-user',
  templateUrl: 'app-navigation-user.component.html',
  styleUrl: 'app-navigation-user.component.scss',
  imports: [Avatar, AvatarMark, Button, ButtonIcon],
})
export class AppNavigationAvatar {}
