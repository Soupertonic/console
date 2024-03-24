import { Component, inject } from '@angular/core'
import { ActivatedRoute, Router, RouterLink } from '@angular/router'

import { Button } from '@console/ui/components/button'
import { ButtonIcon } from '@console/ui/components/button-icon'
import { ButtonLabel } from '@console/ui/components/button-label'

@Component({
  standalone: true,
  selector: 'console-gameserver-navigation-board',
  templateUrl: 'gameserver-navigation-board.component.html',
  styleUrl: 'gameserver-navigation-board.component.scss',
  imports: [RouterLink, Button, ButtonIcon, ButtonLabel],
})
export class GameserverNavigationBoard {
  private _router = inject(Router)
  private _activatedRoute = inject(ActivatedRoute)

  protected navigateRoute(route: string): void {
    this._router.navigate([route], { relativeTo: this._activatedRoute })
  }

  protected isActiveRoute(route: string): boolean {
    return this._router.isActive(
      this._router.createUrlTree([route], { relativeTo: this._activatedRoute }),
      { paths: 'exact', queryParams: 'ignored', fragment: 'ignored', matrixParams: 'ignored' }
    )
  }
}
